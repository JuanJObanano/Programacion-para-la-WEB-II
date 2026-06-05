import ProductoCard from "../components/ProductoCard";

function Productos () {
    const baseDatosProductos = [
        { id: 1, nombre: "Portatil Pro 15", precio: 1200 },
        { id: 2, nombre: "Auriculares", precio: 150 },
        { id: 3, nombre: "Teclado Mecanico", precio: 95 },
        { id: 4, nombre: "Monitor 4K", precio: 400 },
    ]
    
    return(
        <div>
            <h1>🛍️ Gestión de Productos</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap:'20px' }}>
                {baseDatosProductos.map((prod)=>(
                    <ProductoCard key={prod.id} producto={prod}/>
                ))}
            </div>
        </div>
    );
}

export default Productos;