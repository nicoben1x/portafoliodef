import './App.css';
import { HiMenu } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import Educacion from './Educacion';
import Skills from './Skills';





function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <IoMenu onClick={menuDes} className='menuboton' />
        <div className='redes'>
          <GrMail className='mailboton' />
          <AiFillLinkedin className='linkedinboton' />
          <DiGithubBadge className='githubboton' />
          <HiArrowCircleLeft className='loginboton' />
        </div>

      </div>

      <div className='menuDes ocultar'>

      </div>

      <div className='acercademi'>

        <img className='bannerfoto' src='https://i.ibb.co/yfxKRcw/banerrr.png' />
        <img className='perfilfoto' src='https://i.postimg.cc/PqJj9w2J/20221211-213641.jpg' />
        <h1 className='nombreperfil'>Nicolás Benavidez</h1>
        <h2 className='rolperfil'>Programador Web Fullstack Jr.</h2>
        <p className='acercaperfil'> Soy una persona proactiva, organizada
          y responsable, con buenas relaciones interpersonales.
          Siempre tengo la mejor disposición para la realización de mis
          labores. Busco un puesto de trabajo desafiante.</p>

      </div>

      <Educacion/>


    <Skills/>



    </div>
  );
}

function menuDes(){
  document.querySelector(".menuDes").classList.toggle("ocultar");
}


export default App;
