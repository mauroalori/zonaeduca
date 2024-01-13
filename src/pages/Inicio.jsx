import Navbar from "../components/Navbar/Navbar"
import SeccionPortada from "../components/Inicio/seccionPortada/SeccionPortada";
import SeccionRecomendaciones from "../components/Inicio/seccionRecomendaciones/SeccionRecomendaciones";
import SeccionComentarios from "../components/Inicio/seccionComentarios/SeccionComentarios";
import SeccionPresentacion from "../components/Inicio/seccionPresentacion/SeccionPresentacion";
import Formulario from "../components/Inicio/formulario/Formulario";
import Footer from "../components/Footer/Footer";
import ModalRegistrar from "../components/Navbar/Modals/ModalRegistrar";
import React, {useState} from "react";

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
      <SeccionComentarios/>

      {/* FORMULARIO CONTACTO */}
      <Formulario/>

      {/* FOOTER  */}
      <Footer/>
    </>
  )
}

export default Inicio
