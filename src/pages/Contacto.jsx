import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import FormContacto from "../components/Contacto/FormContacto"
function Contacto() {
  window.scrollTo(0, 0);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* FORMULARIO  */}
      <FormContacto/>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default Contacto