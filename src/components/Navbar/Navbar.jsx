import React, {useState} from "react";
import logo from './../../assets/logo.png'
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
        <button type="icon-toggle" className={`burger ${burger_state} mr-4`} onClick={updateMenu}></button>
        <ul className={`menu ${menu_state} nav-principal flex flex-col gap-8`}>
          <li className=''>Inicio</li>
          <li className=''>Colegios</li>
          <li className=''>Contacto</li>
          <li className=''>Ayuda</li>
        </ul>
        <ul className={`menu ${menu_state} nav-cuenta flex flex-row gap-5 mr-4 text-sm`}>
          <li>Registrarse</li>
          <li>Ingresar</li>
        </ul>
      </nav>
      
    </>
  )
}

export default Navbar