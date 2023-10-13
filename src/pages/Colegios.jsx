import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import MapaColegios from "../components/MapaColegios/MapaColegios"
import SeccionFiltro from "../components/Colegios/seccionFiltro/SeccionFiltro"
import ListadoColegios from "../components/MapaColegios/ListaColegios/ListadoColegios"
import { useState } from "react"

function Colegios() {

  const [selectedDepartamento, setSelectedDepartamento] = useState("");
  const [selectedNivel, setSelectedNivel] = useState("");
  const [selectedIdioma, setSelectedIdioma] = useState("");

  return (
    <>
      {/* NAVBAR */}
        <Navbar/>

      {/* SECCION FILTRO  */}
      <SeccionFiltro setSelectedDepartamento={setSelectedDepartamento} setSelectedNivel={setSelectedNivel} setSelectedIdioma={setSelectedIdioma}/>

      {/* MAPA COLEGIOS */}
      <MapaColegios />

      {/* LISTADO COLEGIOS */}
      <ListadoColegios selectedDepartamento={selectedDepartamento} selectedNivel={selectedNivel} selectedIdioma={selectedIdioma}/>
        
      {/* FOOTER */}
        <Footer/>
    </>
  )
}

export default Colegios
