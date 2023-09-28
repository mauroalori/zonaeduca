import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import MapaColegios from "../components/MapaColegios/MapaColegios"
import SeccionFiltro from "../components/Colegios/seccionFiltro/seccionFiltro"
function Colegios() {
  return (
    <>
      {/* NAVBAR */}
        <Navbar/>

      {/* SECCION FILTRO  */}
      <SeccionFiltro/>

      {/* MAPA COLEGIOS */}
        <MapaColegios/>
      {/* LISTADO COLEGIOS */}
        
      {/* FOOTER */}
        <Footer/>
    </>
  )
}

export default Colegios
