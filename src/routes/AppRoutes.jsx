import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Colegios from "../pages/Colegios";
import Contacto from "../pages/Contacto";
import VistaColegio from "../pages/VistaColegio";


function AppRoutes() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/colegios" element={<Colegios/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/colegios/:id" element={<VistaColegio/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default AppRoutes
