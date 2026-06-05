import { useState, useEffect } from 'react';

export default function SimuladorAPI(){
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        console.log("Conectando al servidor...");

        setTimeout( () => {
            const respuestaJson = [
                { id: 1, nombre: "Portatil Pro 15", stock: 15 },
                { id: 2, nombre: "Auriculares", stock: 20 },
                { id: 3, nombre: "Teclado Mecanico", stock: 0 }
            ]

            setDatos(respuestaJson);
            setCargando(false);
            //setError("El servidor no responde");
        }, 3000 );
    }, [] )

    if(cargando){
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>⏳ Conectando con la base de datos...</h2>
                <p>Por favor espere, en un momento se mostran los resultados.</p>
            </div>
        );
    } 

    if (error){
        return (
            <div style={{ background: '#fee2e2', color: '#ef4444', padding: '20px', borderRadius: '10px' }}>
                <h2>🚨 {error}</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
            <h2 style={{ color: 'black' }}>📦 Inventario recibido desde la base de datos</h2>
            <ul>
                {
                    datos.map((producto) => (
                        <li key={producto.id} style={{ padding: '10px', borderBottom: '1px solid #cbd5e1' }}>
                            <strong>{producto.nombre}</strong> - <span>
                                {producto.stock > 0 ? `Stock: ${producto.stock}` : 'Agotado'}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );

}