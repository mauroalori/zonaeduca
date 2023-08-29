import  {useState} from "react";
import logo from './../../assets/logo.png'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    // to change burger classes
    const [burger_state, setBurgerClass] = useState("unclicked")
    const [menu_state, setMenuClass] = useState("hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("clicked")
            setMenuClass("visible")
        }
        else {
            setBurgerClass("unclicked")
            setMenuClass("hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

  return (
    <>
      <nav id="nav" className='bg-[#001A29] text-white flex wrap justify-between items-center'>
        <img src={logo} alt="" className='ml-4 h-11 p-2'/>
        <button type="icon-toggle" className={`burger ${burger_state}  mr-4`} onClick={updateMenu}></button>
        <ul className={`menu ${menu_state} nav-principal flex flex-col gap-8`}>
          <Link className=''>Inicio</Link>
          <Link className=''>Colegios</Link>
          <Link className=''>Contacto</Link>
          <Link className=''>Ayuda</Link>
        </ul>
        <ul className={`menu ${menu_state} nav-cuenta flex flex-row gap-5 mr-4 text-sm`}>
          <Link>Registrarse</Link>
          <Link>Ingresar</Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
