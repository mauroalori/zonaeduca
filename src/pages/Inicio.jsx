import Navbar from "../components/Navbar/Navbar"
import SeccionPortada from "../components/Inicio/seccionPortada/SeccionPortada";
import SeccionRecomendaciones from "../components/Inicio/seccionRecomendaciones/SeccionRecomendaciones";
import SeccionComentarios from "../components/Inicio/seccionComentarios/SeccionComentarios";

function Inicio() {
  return (
    <>
      <Navbar/>

      {/* SECCION PORTADA  */}
      <SeccionPortada/>

      {/* SECCION PRESENTACION  */}
      

      {/* SECCION RECOMENDACIONES  */}
      <SeccionRecomendaciones/>

      {/* SECCION COMENTARIOS  */}
      <SeccionComentarios/>

      {/* FORMULARIO CONTACTO */}

      {/* FOOTER  */}
    </>
  )
}

export default Inicio
