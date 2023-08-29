import  {useState} from "react";
import logo from './../../assets/logo.png'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    // to change burger classes


    // toggle burger menu change
    const [Open, setOpen] = useState(false);


  return (
    <>
    <nav className={`navBar ${Open && "open"}`}>

      <div className={`navLogo ${Open && "open"}`}>
      <img src={logo} alt="logo" className="w-44"/>
      </div>

      <div className={`items ${Open && "open"} flex  `}>

        <Link >Inicio</Link>
        <Link >Colegios</Link>
        <Link  >Contacto </Link>
        <Link  >Ayuda </Link>
        
        <div className="gap-5 mr-5 flex justify-center md:ml-60 ml-0"   >
          <div className="text-center items-center flex md:gap-2 gap-5 text-white md:mt-0 mt-16">
          <Link  >Registrarse </Link>
          <Link  >Ingresar </Link>
          </div>
        </div>

      </div>



      <div
        className={`toggle ${Open && "open"}`}
        onClick={() => setOpen(!Open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>


    </nav>
    </>
  );
}

export default Navbar;
