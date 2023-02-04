import './Educacion.css';
import EduCard from './EduCard';


function Educacion() {
    return (
        <div className='edudiv'>
            <h1>Educacion</h1>
            <div className='educampo'>
                <EduCard

                    titulo="Web Design"
                    instituto="freeCodeCamp"
                    fecha="06/2022 - 01/2023"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus orci convallis 
            felis porttitor pellentesque. Nullam neque arcu, aliquet quis ipsum id, auctor auctor dolor. 
            Integer id magna at dui malesuada commodo. Pellentesque habitant morbi tristique senectus et 
            netus et malesuada fames ac turpis egestas."
                    imgedu="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CxIwdP8u4cH-kKfNNolKpffKGZoZuSfP3Q&usqp=CAU"

                />

                <EduCard

                    titulo="Desarrollador Web Fullstack"
                    instituto="Argentina Programa"
                    fecha="05/2022 - 02/2023"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus orci convallis 
                felis porttitor pellentesque. Nullam neque arcu, aliquet quis ipsum id, auctor auctor dolor. 
                Integer id magna at dui malesuada commodo. Pellentesque habitant morbi tristique senectus et 
                netus et malesuada fames ac turpis egestas."
                    imgedu="https://yt3.googleusercontent.com/4HM_-p_YCTbyHFdDKLOd2DPr8QvHePQcq9v4404vHP4ojUD5H9h0Cj8MYY0EAgFWxKocR2bGgQc=s900-c-k-c0x00ffffff-no-rj"

                />

            </div>





        </div>
    );


}

export default Educacion;