import "./Proyectos.css"
import ProyectoCard from "./ProyectoCard";


function Proyectos() {
    return (
        <div className="proyectosdiv">
            <h1>Proyectos</h1>
            <div className="proyectoscampo">
                <ProyectoCard/>
                <ProyectoCard/>




            </div>

        </div>
    );
}

export default Proyectos;