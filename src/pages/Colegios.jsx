import Navbar from "../components/Navbar/Navbar"
import SeccionFiltro from "../components/Colegios/seccionFiltro/SeccionFiltro"
function Colegios() {
  return (
    <>
      <h1 className="text-center">Colegios</h1>
      <Navbar/>
      {/* SECCION FILTRO  */}
      <SeccionFiltro/>
      </>
  )
}

export default Colegios
