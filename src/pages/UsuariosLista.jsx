import { Link } from 'react-router-dom';
import UsuarioCard from '../components/UsuarioCard';

function UsuariosLista() {
    return (
        <div>
            <h1>Lista de usuarios</h1>
            <p>Pasando PROPS uno por uno</p>

            <div style={}></div>
            <ul>
                <li><Link to="/usuario/123">Ver perfil del usuario Juan Perez (123)</Link></li>
                <li><Link to="/usuario/217">Ver perfil del usuario Ana Gomez (217)</Link></li>
            </ul>
        </div>
    );
}

export default UsuariosLista;