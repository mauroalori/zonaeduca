import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import MapaColegios from "../components/MapaColegios/MapaColegios"
import ListadoColegios from "../components/MapaColegios/ListaColegios/ListadoColegios"

function Colegios() {
  return (
    <>
      {/* NAVBAR */}
        <Navbar/>
      {/* FILTRADO COLEGIOS */}

      {/* MAPA COLEGIOS */}
        <MapaColegios/>

      {/* LISTADO COLEGIOS */}
      <ListadoColegios/>
        
      {/* FOOTER */}
        <Footer/>
    </>
  )
}

export default Colegios
