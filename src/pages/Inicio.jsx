import Navbar from "../components/Navbar/Navbar"
import SeccionPortada from "../components/Inicio/seccionPortada/SeccionPortada";
import SeccionRecomendaciones from "../components/Inicio/seccionRecomendaciones/SeccionRecomendaciones";
import SeccionPresentacion from "../components/Inicio/seccionPresentacion/SeccionPresentacion";
function Inicio() {
  return (
    <>
      <Navbar/>

      {/* SECCION PORTADA  */}
      <SeccionPortada/>

      {/* SECCION PRESENTACION  */}
      <SeccionPresentacion/>

      {/* SECCION RECOMENDACIONES  */}
      <SeccionRecomendaciones/>
      {/* SECCION COMENTARIOS  */}

      {/* FORMULARIO CONTACTO */}

      {/* FOOTER  */}
    </>
  )
}

export default Inicio
