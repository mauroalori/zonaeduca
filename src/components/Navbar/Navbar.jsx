import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-[#001A29] text-white flex justify-between items-center h-11">
        <img src={logo} alt="logo" className="ml-4 h-6" />
        <ul className="flex gap-10">
          <li className="">
            <Link>Inicio</Link>
          </li>
          <li className="">
            <Link>Colegios</Link>
          </li>
          <li className="">
            <Link>Contacto</Link>
          </li>
          <li className="">
            <Link>Ayuda</Link>
          </li>
        </ul>
        <ul className="flex gap-5 mr-4">
          <li>Registrarse</li>
          <li>Ingresar</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
