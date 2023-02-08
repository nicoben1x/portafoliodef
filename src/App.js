import './App.css';
import { HiMenu } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import Educacion from './Educacion';
import Skills from './Skills';
import Proyectos from './Proyectos';
import Contacto from './Contacto';
import Final from './Final';
import GmailLogo from "./assets/Gmail_black.png"
import FacebookLogo from "./assets/Facebook_black.png"
import LinkedinLogo from "./assets/LinkedIN_black.png"
import GithubLogo from "./assets/Github_black.png"





function App() {
  return (
    <div className="App">
      <div className='navbar'>

        <ul className='listadnav'>
          <li className="listadnav-item" ><a href='#homeid'>Home</a></li>
          <li className="listadnav-item" ><a href='#educacionid'>Educacion</a></li>
          <li className="listadnav-item"><a href='#skillsid'>Skills</a></li>
          <li className="listadnav-item"><a href='#proyectosid'>Proyectos</a></li>
          <li className="listadnav-item"><a href='#contactoid'>Contacto</a></li>
        </ul>



        <IoMenu onClick={menuDes} className='menuboton' />
        <div className='redes'>
          <img src={GmailLogo}/>
          <img src={GmailLogo}/>
          <img src={GmailLogo}/>
          <img src={GmailLogo}/>
          <GrMail className='mailboton' />
          <AiFillLinkedin className='linkedinboton' />
          <DiGithubBadge className='githubboton' />
          <HiArrowCircleLeft className='loginboton' />
        </div>

      </div>

      <div className='menuDes ocultar'>
        <ul className='listanav'>
          <li><a onClick={menuDes} href='#homeid'>Home</a></li>
          <li><a onClick={menuDes} href='#educacionid'>Educacion</a></li>
          <li><a onClick={menuDes} href='#skillsid'>Skills</a></li>
          <li><a onClick={menuDes} href='#proyectosid'>Proyectos</a></li>
          <li><a onClick={menuDes} href='#contactoid'>Contacto</a></li>
        </ul>

      </div>

      <div id='homeid' className='acercademi'>

        <img className='bannerfoto' src='https://i.ibb.co/yWwp6D5/ban222222errr.png' />
        <div className='fotoytext'>

          <div className='textt'>


            <img className='perfilfoto' src='https://i.postimg.cc/PqJj9w2J/20221211-213641.jpg' />
            <h1 className='nombreperfil'>Nicolás Benavidez</h1>
            <h2 className='rolperfil'>Programador Frontend</h2>
          </div>
          <p className='acercaperfil'> Soy una persona proactiva, organizada
            y responsable, con buenas relaciones interpersonales.
            Siempre tengo la mejor disposición para la realización de mis
            labores. Busco un puesto de trabajo desafiante.</p>
        </div>

      </div>

      <div className='sectiondiv' id="educacionid"></div>
      <Educacion />

      <div className='sectiondiv' id="skillsid"></div>
      <Skills />

      <div className='sectiondiv' id="proyectosid"></div>
      <Proyectos />


      <div className='sectiondiv' id="contactoid"></div>
      <Contacto />

      <Final />



    </div>
  );
}

function menuDes() {
  document.querySelector(".menuDes").classList.toggle("ocultar");
}



export default App;
