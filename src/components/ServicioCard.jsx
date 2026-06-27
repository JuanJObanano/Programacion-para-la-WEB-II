import './ServicioCard.css';
import imagenServicio from '../assets/servicio-web.jpg';

function ServicioCard() {
  const nombreServicio = "Desarrollo Web a Medida";
  const descripcion = "Creamos Single Page Applications ultrarrápidas utilizando React y Vite para potenciar tu negocio.";
  const precio = "$500 USD";
  const enOferta = true; 
  
  return (
    <article className="servicio-card">
        <div className="card-imagen-contenedor">
        <img src={imagenServicio} alt="Servicio Web" className="card-imagen" />
        
        {enOferta && <span className="card-etiqueta">¡Oferta Especial!</span>}
      </div>

      
      <div className="card-contenido">
        <h3 className="card-titulo">{nombreServicio}</h3>
        <p className="card-descripcion">{descripcion}</p>
        
        <div className="card-footer">
          <span className="card-precio">{precio}</span>
          <button className="card-boton">Contratar</button>
        </div>
      </div>
    </article>
  );
}

export default ServicioCard;