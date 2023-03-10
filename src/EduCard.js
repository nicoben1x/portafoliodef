import './EduCard.css';

function EduCard({titulo,instituto,fecha,desc,imgedu}) {
    return (
        <div className='educard'>

            <img className='edulogo' src={imgedu} />


            <div className='edutext'>
                <h1>{titulo}</h1>
                <h2>{instituto}</h2>
                <h3>{fecha}</h3>
                <p>{desc}</p>

            </div>
        </div>

    );
}

export default EduCard;

