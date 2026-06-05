import ContadorVentas from "../components/ContadorVentas";
import RelojDigital from "../components/RelojDigital";
import ServicioCard from "../components/ServicioCard";
import SimuladorAPI from "../components/SimuladorAPI";

function PanelGeneral(){
    return(
        <div>
            <h1>Panel General</h1>
            <p>Bienvenido al sistema. Aqui estan las estadisticas de hoy.</p>
            <ServicioCard />
            <SimuladorAPI />
            <ContadorVentas />
            <RelojDigital />
        </div>
    );
}

export default PanelGeneral;