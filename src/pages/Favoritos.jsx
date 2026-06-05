import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

export default function Favoritos(){
    const { favoritos, vaciarFavoritos } = useContext(FavoritosContext);

    return (
        <div>
            <h1>⭐ Mis Favoritos</h1>

            {
                favoritos.length === 0 ? (
                    <p>No tienes ningun producto en la lista</p>
                ) : (
                    <>
                        <button onClick={vaciarFavoritos} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', marginBottom: '20px', cursor: 'pointer' }}>
                            🗑️ Vaciar lista
                        </button>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {
                                favoritos.map((item) => (
                                    <li key={item.id} style={{ background: 'white', padding: '15px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #2ee8f0' }}>
                                        <strong>{item.nombre}</strong> - ${item.precio}
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                )                
            }

        </div>
    );
}