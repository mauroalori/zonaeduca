import fondo from "../../../assets/fondo.png"
import fotoPresentacion from "../../../assets/fotoP.png"
import "./seccionPresentacion.css"

export default function SeccionPresentacion() {
    return (
      <>
      <div className="contenedor bg-[#00B0E4] bg-opacity-20 h-90 flex">
        <div className="w-1/2 flex items-center justify-center p-6">
            <img src={fondo} alt="" className="imagen1"/>
            <img src={fotoPresentacion} alt=""  className="imagen2"/>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center p-6">
            <div >
            <p className="presentacion">
              ¡Bienvenidos a ZonaEduca! <br></br>
            </p>
            <p className="presentacion">
              Somos tu guía para encontrar el mejor colegio cerca de tu hogar. Facilitamos la búsqueda al proporcionarte información detallada, comparaciones y reseñas de colegios en tu zona. ¡Encuentra la educación perfecta para tus hijos sin complicaciones en ZonaEduca!
            </p>
            </div>
            <div>
                <button className="btn-colegio mt-7">COLEGIOS</button>
            </div>
        </div>
      </div>
      </>
    )
  }