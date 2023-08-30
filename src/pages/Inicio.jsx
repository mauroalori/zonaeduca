import Navbar from "../components/Navbar/Navbar"
import fondo from "../assets/fondo.png"
import '../styles/inicio.css';
function Inicio() {
  return (
    <>
      <Navbar/>
      <div className="contenedor">
        <img src={fondo} alt="" className="imagen"/>
        <p className="texto">Te ayudamos a encontrar el mejor <br /> colegio para tus hijos</p>
      </div>
    </>
  )
}

export default Inicio
