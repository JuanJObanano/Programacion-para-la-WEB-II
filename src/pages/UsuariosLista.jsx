import { Link } from 'react-router-dom';
import UsuarioCard from '../components/UsuarioCard';

function UsuariosLista() {

    const baseDeusuarios = [
        {id:1, nombre:"Juan Gonzalez", rol:"administrador", estado:"activo", img:"https://randomuser.me/api/portraits/men/32.jpg"},
        {id:2, nombre:"marcela juliana", rol:"diseñadora", estado:"inactivo", img:"https://randomuser.me/api/portraits/women/32.jpg"},
        {id:3, nombre:"julian gomez", rol:"empleado", estado:"activo", img:"https://randomuser.me/api/portraits/men/12.jpg"}
    ]

    return (
        <div>
            <h1>Lista de usuarios</h1>
            <p>Pasando PROPS uno por uno</p>
            <div style={{display: 'flex', flexDireccion: 'column', gap: '15px'}}>
                {baseDeusuarios.map ( (usuario)=>(
                    <UsuarioCard
                    key={usuario.id}
                    nombre={usuario.nombre}
                    rol={usuario.rol}
                    estado={usuario.estado}
                    imagen={usuario.img} />
                 ) )
                }
            </div>
        </div>
    );
}

export default UsuariosLista;