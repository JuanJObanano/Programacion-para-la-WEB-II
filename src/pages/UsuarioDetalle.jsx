import { useParams, Link } from "react-router-dom";

function UsuarioDetalle () {
    const parametros = useParams();
    const usuarioId = parametros.id;

    return (
        <div>
            <h2>Perfil del Usuario</h2>
            <p>Estas viendo la informacion detallada para el usuario con el id: <strong>{usuarioId}</strong></p>

            <Link to="/usuarios" style={{padding: '10px', background: '#e2e8f0', borderRadius: '10px', textDecoration: 'none', marginTop: '30px' }}>
                Volver a la lista de usuarios
            </Link>
        </div>
    );
}

export default UsuarioDetalle;