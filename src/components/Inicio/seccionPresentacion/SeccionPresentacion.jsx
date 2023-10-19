import fotoSup from "../../../assets/fondo1.png"
import fotoInf from "../../../assets/fotoP.png"
import "./seccionPresentacion.css"
import {Link} from "react-router-dom"

export default function SeccionPresentacion() {
    return (
      <>
      <div className="container-presentacion bg-[#00B0E4] bg-opacity-20">
        <div className="container-imagen w-[50%]">
              <img src={fotoSup} alt="" className="imagen-grande"/>
              <img src={fotoInf} alt=""  className="imagen-chica"/>
        </div>
        <div className="container-frase w-[50%]">
            <div >
            <h3 className="titulo">
              ¡Bienvenidos a ZonaEduca!
            </h3>
            <p className="presentacion">
              En ZonaEduca, entendemos la importancia de la ubicación y la comodidad al elegir un colegio 
              para tus hijos. Nuestra plataforma te permite explorar una amplia variedad de colegios ubicados 
              en tu zona, lo que significa menos tiempo de desplazamiento y más tiempo de calidad con tu familia. 
            </p>
            </div>
            <div>
              <Link to="/colegios">
                <button className="btn-colegio">COLEGIOS</button>
              </Link>
            </div>
        </div>
      </div>
      </>
    )
  }