import { useState, useEffect } from 'react';

export default function InventarioMongo(){
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "mongodb+srv://juanjose1234obando_db_user:<1073157021samuel>@cluster0.zzupwj1.mongodb.net/?appName=Cluster0"

    const obtenerProductos = async () => {
        try {
            const respuesta = await fetch(API_URL);

            if (!respuesta.ok){
                throw new Error("Fallo al conectar...");
            }

            const datosMongo = await respuesta.json();
            setProductos(datosMongo);
        } catch (error) {
            setError(error.message);
        } finally {
            setCargando(false);
        }
    }

    useEffect(()=>{
        obtenerProductos();
    }, []);

    const eliminarProducto = async (idMongo) => {
        if (!window.confirm("¿Seguro quiere eliminar el producto?")) return;

        try {
            const respuesta = await fetch(`${API_URL}/${idMongo}`, {
                method: 'DELETE'
            });

            if (respuesta.ok){
                const nuevaLista = productos.filter((prod) => prod._id !== idMongo);
                setProductos(nuevaLista);
                alert("Producto eliminado correctamente");
            } else {
                alert("Error al eliminar");
            }
        } catch (error) {
            console.error("Error en el servidor", error);
        }
    }

    const aumentarPrecio = async (idMongo, precioActual) => {
        const nuevoPrecio = precioActual + 10;

        try {
            const respuesta = await fetch(`${API_URL}/${idMongo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ precio: nuevoPrecio})
            });

            if (respuesta.ok){
                const listaActualizada = productos.map((prod)=>{
                    if (prod._id === idMongo){
                        return { ...prod, precio: nuevoPrecio}
                    }
                    return prod;
                });

                setProductos(listaActualizada);
            }

        } catch (error) {
            console.error("Error al actualizar:", error);
        }
    };

    if (cargando) return <h3>Consultando datos a la API</h3>;
    if (error) return <h3 style={{color: 'red'}}>{error}</h3>;
    
    return (
        <div style={{background: '#f8fafc', padding: '20px', borderRadius: '8px'}}>
            <h2 style={{color: 'black'}}>Inventario desde Mongo</h2>
            <ul style={{listStyle: 'none', padding: '0'}}>
                {productos.map((prod)=>(
                    <li key={prod._id || prod.id } style={{
                        padding: '15px',
                        border: '1px solid #cbd5e1',
                        background: 'white',
                        marginBottom: '10px',
                        borderRadius: '5px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <strong style={{fontSize: '1.1rem', color: '#0f172a'}}>{prod.nombre}</strong>
                            <p style={{ 
                                margin: '5px 0 0 0',
                                color: '#10b981',
                                fontWeight: 'bold'
                            }}>
                                Precio: ${prod.precio}
                            </p>
                        </div>

                        <div style={{display: 'flex', gap: '10px'}}>
                            <button onClick={() => aumentarPrecio(prod._id, prod.precio)} 
                                style={{background: '#eab308', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', fontWeight: 'bold'}}>
                                ✏️ +%10
                            </button>
                            <button onClick={() => eliminarProducto(prod._id)}
                                style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', fontWeight: 'bold'}}>
                                🗑️ Borrar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}