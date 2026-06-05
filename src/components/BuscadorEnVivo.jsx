import { useState } from "react";

function BuscadorEnVivo(){
    const [textoBusqueda, setTextoBusqueda] = useState('');

    const manejarCambio = (e)=>{
        setTextoBusqueda(e.target.value);
    };

    const limpiar = ()=>{
        setTextoBusqueda('');
    };

    return(
        <div style={{width: '100%', background: "#FFF", height: "30px", display:"flex" ,padding: "20px", borderRadius:"8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "20px"}}>
            <input type="text"
                placeholder="Escribe algo aqui..."
                value={textoBusqueda}
                onChange={manejarCambio}
                style={{width: '100%', padding:'10px', borderRadius: '5px', border:'1px solid #cbd5e1', marginBottom:'10px'}} />
            
            {textoBusqueda.length > 0 && (
                <button onClick={limpiar} style={{ background:'#f87171', color:'white',border:'none', padding:'5px 10px', borderRadius:'5px', cursor:'pointer'}}>
                    Borrar todo
                </button>
            )}
        </div>
    );

}

export default BuscadorEnVivo;