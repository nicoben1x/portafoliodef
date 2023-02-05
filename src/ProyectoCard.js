import "./ProyectoCard.css"

function ProyectoCard(){
    return (
        <div className="proyectocard">
            <img className="imgproyecto" src="https://img.freepik.com/vector-gratis/calculadora-rosa-sobre-fondo-blanco_1308-74126.jpg"/>
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