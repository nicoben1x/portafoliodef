import "./Skills.css";
import SkillsCard from "./SkillsCard";

function Skills() {
    return (
        <div className="skillsdiv">
            <h1 className="skillsh1">Skills</h1>

            <div>

                <h2 className="skillsub">Hard Skills</h2>

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
                <h2 className="skillsub">Soft Skills</h2>
                <div className="skillscampo">
                    <SkillsCard
                        imgs="https://publicdomainvectors.org/tn_img/provider-idea.webp"
                        titulo="Adaptabilidad y flexibilidad"
                        nivel=""
                    />
                    <SkillsCard
                        imgs="https://publicdomainvectors.org/tn_img/provider-idea.webp"
                        titulo="Trabajo en equipo"
                        nivel=""
                    />

                    <SkillsCard
                        imgs="https://publicdomainvectors.org/tn_img/provider-idea.webp"
                        titulo="Creatividad e innovación"
                        nivel=""
                    />


                </div>


            </div>

            <div>
                <h2 className="skillsub">Idiomas</h2>

                <div className="skillscampo">
                    <SkillsCard
                        imgs="https://cdn-icons-png.flaticon.com/512/2037/2037492.png"
                        titulo="Español"
                        nivel="Nativo"
                    />
                    <SkillsCard
                        imgs="https://cdn-icons-png.flaticon.com/512/2037/2037492.png"
                        titulo="Inglés"
                        nivel="Intermedio"
                    />


                </div>




            </div>

        </div>

    );
}

export default Skills;