import "./Final.css"
import loggo from "./assets/logo.png"
import freeCodeLogo from "./assets/FreeCodeCamp_logo.svg.png"
function Final(){
    return (
        <div className="finaldiv">
            <img className="logoargprog" src={loggo}/>
            <img className="logofreecode" src={freeCodeLogo}/>

        </div>
    );
}

export default Final;