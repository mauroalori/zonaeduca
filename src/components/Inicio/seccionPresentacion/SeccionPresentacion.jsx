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
              Somos tu guía para encontrar el mejor colegio cerca de tu hogar. Facilitamos la búsqueda al proporcionarte información detallada, comparaciones y reseñas de colegios en tu zona. ¡Encuentra la educación perfecta para tus hijos sin complicaciones en ZonaEduca!
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