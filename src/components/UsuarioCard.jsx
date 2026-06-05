import './UsuarioCard.css';
import { useState } from 'react';

function UsuarioCard({ nombre, rol, imagen }){
    const [siguiendo, setSiguiendo] = useState(false);

    const alternarSeguimiento = ()=>{
        setSiguiendo(!siguiendo);
    };

    return (
        <div className='usuario-card'>
            <img src={imagen} alt={`Foto de ${nombre}`} className="usuario-img" />
            <div className='usuario-info'>
                <h3>{nombre}</h3>
                <p className='usuario-rol'>{rol}</p>
            </div>
            <div className='usuario-acciones'>
                <button onClick={alternarSeguimiento} style={{background: siguiendo ? '#e2e8f0' : '#38bdf8', color: siguiendo ? '#475569' : 'white'}}>
                    {siguiendo ? 'Siguiendo':'Seguir'}
                </button>
            </div>
        </div>
    );
}

export default UsuarioCard;