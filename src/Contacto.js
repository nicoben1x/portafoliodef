import "./Contacto.css"
import ContactoCard from "./ContactoCard";

function Contacto(){
    return (
        <div className="contactodiv">
            <h1>Contacto</h1>
            <div className="contactocampo">
            <ContactoCard/>
            <ContactoCard/>
            <ContactoCard/>

            </div>

        </div>
    );

}

export default Contacto;