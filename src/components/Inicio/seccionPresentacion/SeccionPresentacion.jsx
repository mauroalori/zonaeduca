import fondo1 from "../../../assets/fondo1.png"
import fotoPresentacion from "../../../assets/fotoP.png"
import "./seccionPresentacion.css"

export default function SeccionPresentacion() {
    return (
      <>
      <div className="container_presentacion bg-[#00B0E4] bg-opacity-20">
        <div className="container_imagen">
            <img src={fondo1} alt="" className="imagen1"/>
            <img src={fotoPresentacion} alt=""  className="imagen2"/>
        </div>
        <div className="container_frase">
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
                <button className="btn-colegio">COLEGIOS</button>
            </div>
        </div>
      </div>
      </>
    )
  }