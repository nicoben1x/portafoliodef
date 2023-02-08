import "./Final.css"
import loggo from "./assets/logo.png"
import freeCodeLogo from "./assets/FreeCodeCamp_logo.svg.png"
function Final() {
    return (
        <div className="finaldivposta">
        <div className="finaldiv">
            
                <img className="logoargprog" src={loggo} />
                <img className="logofreecode" src={freeCodeLogo} />
            
            

        </div>
        <p className="frasep">"La tecnología es mejor cuando reúne a la gente." Matt Mullenweg.</p>

        </div>
    );
}

export default Final;