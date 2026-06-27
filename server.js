import fs from 'fs';
import path from 'path';
import { createServer } from 'http';
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) continue;
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

const PORT = Number(process.env.PORT || 3000);
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/miapp';
const DB_NAME = process.env.DB_NAME || 'miapp';

const client = new MongoClient(MONGODB_URI);
let db;

async function connectToDb() {
  if (!db) {
    await client.connect();
    db = client.db(DB_NAME);
    console.log(`Conectado a MongoDB en ${DB_NAME}`);
  }
  return db;
}

const server = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/api/productos' && req.method === 'GET') {
    try {
      const database = await connectToDb();
      const productos = await database.collection('productos').find({}).sort({ createdAt: -1 }).toArray();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(productos));
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'No se pudo consultar la base de datos' }));
    }
    return;
  }

  if (req.url === '/api/productos' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const producto = JSON.parse(body);
        const database = await connectToDb();
        const resultado = await database.collection('productos').insertOne({
          ...producto,
          createdAt: new Date()
        });

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, id: resultado.insertedId }));
      } catch (error) {
        console.error(error);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'No se pudo guardar el producto' }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
