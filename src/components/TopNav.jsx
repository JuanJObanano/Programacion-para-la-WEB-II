import { useContext } from 'react';
import BuscadorEnVivo from './BuscadorEnVivo';
import './TopNav.css';
import { AuthContext } from '../context/AuthContext';
import { FavoritosContext } from '../context/FavoritosContext';
import { Link } from 'react-router-dom';

function TopNav () {
    const { usuario } = useContext(AuthContext);
    const { favoritos } = useContext(FavoritosContext);
    //const usuarioActual = "Juan Perez";

    return(
        <header className='topnav'>
            <div className='buscardor'>
                <BuscadorEnVivo/>
            </div>
            <div className='perfil-usuario'>
                <Link to="/favoritos" className='link-favoritos'>
                    ⭐ Favoritos: <span style={{ color: '#ef4444'}}>{favoritos.length}</span>
                </Link>
                <span className='notificaciones'>🔔</span>
                {usuario.conectado ? (
                    <>
                        <div className='avatar'>{usuario.nombre.charAt(0)}</div>
                        <span className='nombre-usuario'>Hola, {usuario.nombre}</span>
                        <span className='rol-badge' style={{ fontSize:"10px", background:"#e2e8f0", padding:"3px", borderRadius:"5px" }}>
                            {usuario.rol}
                        </span>
                    </>
                ) : (
                    <span className='nombre-usuario' style={{ color:"red"}}>Desconectado</span>
                )}
                
            </div>
        </header>
    );
}

export default TopNav;