import "./SkillsCard.css"

function SkillsCard({imgs,titulo,nivel}){
    return(
        <div className="skillscard">
            <img className="imgskill" src={imgs}/>
            <h1>{titulo}</h1>
            <h2>{nivel}</h2>

        </div>
    );
}

export default SkillsCard;