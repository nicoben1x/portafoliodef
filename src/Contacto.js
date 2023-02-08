import "./Contacto.css"
import ContactoCard from "./ContactoCard";
import GmailLogo from "./assets/Gmail_black.png"
import FacebookLogo from "./assets/Facebook_black.png"
import LinkedinLogo from "./assets/LinkedIN_black.png"
import GithubLogo from "./assets/Github_black.png"


function Contacto(){
    return (
        <div className="contactodiv">
            <h1 className="contactoh1">Contacto</h1>
            <div className="contactocampo">
            <ContactoCard
            imagen={GmailLogo}
            texto="Email"
            />
            <ContactoCard
            imagen={FacebookLogo}
            texto="Facebook"
            />
            <ContactoCard
            imagen={LinkedinLogo}
            texto="Linkedin"
            />
            <ContactoCard
            imagen={GithubLogo}
            texto="Github"
            />

            </div>

        </div>
    );

}

export default Contacto;