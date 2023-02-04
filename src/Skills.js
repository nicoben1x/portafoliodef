import "./Skills.css";
import SkillsCard from "./SkillsCard";

function Skills() {
    return (
        <div className="skillsdiv">
            <h1>Skills</h1>

            <div>

                <h2>Hard Skills</h2>

                <div className="skillscampo">

                    <SkillsCard
                        imgs="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
                        titulo="HTML"
                        nivel="Avanzado"
                    />

                    <SkillsCard
                        imgs="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
                        titulo="CSS"
                        nivel="Avanzado"
                    />

                    <SkillsCard
                        imgs="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                        titulo="Javascript"
                        nivel="Intermedio"
                    />

                    <SkillsCard
                        imgs="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
                        titulo="React"
                        nivel="Intermedio"
                    />

                    <SkillsCard
                        imgs="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
                        titulo="Typescript"
                        nivel="Basico"
                    />

                </div>

            </div>

            <div>
                <h2>Soft Skills</h2>
            </div>

            <div>
                <h2>Idiomas</h2>
            </div>

        </div>

    );
}

export default Skills;