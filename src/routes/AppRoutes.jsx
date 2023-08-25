import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Colegios from "../pages/Colegios";
import Contacto from "../pages/Contacto";


function AppRoutes() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/colegios" element={<Colegios/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default AppRoutes
