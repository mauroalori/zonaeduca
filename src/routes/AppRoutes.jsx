import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Colegios from "../pages/Colegios";
import Contacto from "../pages/Contacto";
import VistaColegio from "../pages/VistaColegio";
import Error from "../pages/Error";


function AppRoutes() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/colegios" element={<Colegios/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/colegios/:id" element={<VistaColegio/>} errorElement={<Error/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default AppRoutes
