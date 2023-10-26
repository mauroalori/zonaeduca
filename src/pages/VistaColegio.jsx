import Navbar from "../components/Navbar/Navbar"
import SeccionComentarios from "../components/Inicio/seccionComentarios/SeccionComentarios";
import SeccionColegio from "../components/VistaColegios/SeccionColegio";
import Footer from "../components/Footer/Footer";
function VistaColegio () {
    
    return (
    <>
        {/* NAVBAR */}
        <Navbar/>

        {/* SECCION COLEGIO  */}
        <SeccionColegio/>

        {/* SECCION COMENTARIOS  */}
        <SeccionComentarios/>

        {/* SECCION FOOTER  */}
        <Footer/>
    </>
    )
}
export default VistaColegio