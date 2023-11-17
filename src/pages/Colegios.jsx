import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import MapaColegios from "../components/MapaColegios/MapaColegios"
import SeccionFiltro from "../components/Colegios/seccionFiltro/SeccionFiltro"
import ListadoColegios from "../components/MapaColegios/ListaColegios/ListadoColegios"
function Colegios() {

  return (
    <>
      {/* NAVBAR */}
        <Navbar/>

      {/* SECCION FILTRO  */}
      <SeccionFiltro/>

      {/* MAPA COLEGIOS */}
      <MapaColegios />

      {/* LISTADO COLEGIOS */}
      <ListadoColegios/>
        
      {/* FOOTER */}
        <Footer/>
    </>
  )
}

export default Colegios
