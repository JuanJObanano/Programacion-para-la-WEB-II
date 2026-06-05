import { Link } from 'react-router-dom';
import UsuarioCard from '../components/UsuarioCard';

function UsuariosLista() {

    const baseDeUsuarios = [
        {id:1, nombre:"Juan Gonzalez", rol: "Administrador", estado:"Activo", img:"https://randomuser.me/api/portraits/men/30.jpg"},
        {id:2, nombre:"Luisa Obando", rol: "Diseñadora", estado:"Inactivo", img:"https://randomuser.me/api/portraits/women/79.jpg"},
        {id:3, nombre:"Santiago Torres", rol: "Desarrollador", estado:"Activo", img:"https://randomuser.me/api/portraits/lego/1.jpg"}
    ]

    return (
        <div>
            <h1>Lista de usuarios</h1>
            <p>Pasando PROPS uno por uno</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {baseDeUsuarios.map( (usuario)=>(
                    <UsuarioCard 
                    key={usuario.id}
                    nombre={usuario.nombre}
                    rol = {usuario.rol}
                    estado = {usuario.estado}
                    imagen={ usuario.img} />
                 ) )
                }
            </div>

        </div>
    );
}

export default UsuariosLista;