import fondo from "../../../assets/fondo.png"
import "./inicio.css"

export default function SeccionPortada() {
  return (
    <>
    <div className="contenedor">
        <img src={fondo} alt="" className="imagen"/>
        <p className="texto">Te ayudamos a encontrar el mejor <br /> colegio para tus hijos</p>
      </div>
    </>
  )
}
