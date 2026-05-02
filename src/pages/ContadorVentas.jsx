import { useState } from "react";

function ContadorVentas(){
    const {ventas, setVentas } = useState(0);

    const registrarVenta = ( ) => {
        setVentas(ventas+1);
    };

    const reiniciar = ()=>{
        setVentas(0);
    };

    return(
        <div style={{ background:"#fff", padding:"20px", borderRadius:"8px", boxShadow:"0 2p 4px rgba(0,0,0,0.1)", width:"300px"}}>
            <h3 style={{margin:0, color:"#64748b"}}>Ventas de hoy</h3>
            <h1 style={{fontSize:"3rem", margin:"10px 0", color:"#0f172a" }}>{ventas}</h1>
            <div style={{ display:"flex", gap:"10px"}}>
                <button onClick={registrarVenta} style={{background:"#2ed573", color:"#fff", border:"none", padding:"10px", borderRadius:"5px", cursor:"pointer", flexGrow:1}}>Ingresar Venta</button>
                <button onClick={reiniciar} style={{background:"#FF0000", color:"#fff", border:"none", padding:"10px", borderRadius:"5px", cursor:"pointer"}}>Reiniciar</button>
            </div>
        </div>
    )

};

export default ContadorVentas