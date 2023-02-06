import "./ProyectoCard.css"

function ProyectoCard(){
    return (
        <div className="proyectocard">
            <img className="imgproyecto" src="https://i.ibb.co/k3gYHVS/Sin-t-tulo.png"/>
            <h1>Calculadora BTC</h1>
            <p className="proyectodesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus 
                tellus quis metus malesuada accumsan. Nullam a massa lorem. Phasellus egestas 
                faucibus nibh eget ultrices. Nullam ipsum nisl, condimentum nec porta ut, accumsan 
                et dolor.</p>
                <p><a>https://www.google.com</a></p>

        </div>
    );
}

export default ProyectoCard;