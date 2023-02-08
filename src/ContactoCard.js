import "./ContactoCard.css"

function ContactoCard({imagen,texto}){
    return (
        <div className="contactocard">
            <img className="imgcontacto" src={imagen}/>
            <h1>{texto}</h1>

        </div>
    );
}
export default ContactoCard;