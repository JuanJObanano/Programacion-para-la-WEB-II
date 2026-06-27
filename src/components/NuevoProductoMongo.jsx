import { useState } from 'react';

export default function NuevoProductoMongo (){

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [enviando, setEnviando] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/productos';

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setEnviando(true);

        const nuevoProducto = {
            nombre: nombre,
            precio: Number(precio)
        };

        try {
            
            const respuesta = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoProducto)
            });

            if (respuesta.ok){
                alert("Documento guardado con exito");
                setNombre('');
                setPrecio('');
            } else {
                alert("Error al guardar en la base de datos.");
            }

        } catch (error) {
            console.error("Error del servidor", error);
            alert("Servidor apagado o inaccesible");
        } finally {
            setEnviando(false);
        }
    }

    return(
        <form onSubmit={manejarEnvio} style={{background: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0', width: '300px'}}>
            <h3>Nuevo Producto</h3>

            <input type="text" 
                placeholder='Nombre del producto'
                value={nombre}
                onChange={(e) => {setNombre(e.target.value)}}
                required
                style={{display: 'block', width: 'stretch', marginBottom: '10px', padding: '8px'}}
            />

            <input type="number" 
                placeholder='Precio'
                value={precio}
                onChange={(e) => {setPrecio(e.target.value)}}
                required
                style={{display: 'block', width: 'stretch', marginBottom: '15px', padding: '8px'}}
            />

            <button 
                type='submit'
                disabled={enviando}
                style={{background: '#3b82f6', color: 'white', padding: '10px', width: '100%', border: 'none', borderRadius: '5px', cursor: 'pointer'}}
            >
                {enviando ? 'Guardando en Mongo...' : 'Guardar Producto'}
            </button>
        </form>
    );

}