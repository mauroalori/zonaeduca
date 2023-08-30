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

        <div className={`items ${Open && "open"} justify-start text-center items-center flex`}>
        <Link >Inicio</Link>
        <Link >Colegios</Link>
        <Link  >Contacto </Link>
        <Link >Ayuda </Link>

        {window.innerWidth < 968 && Open && (
              <div className="mt-10">
                  <Link>Registrarse</Link>
                  <Link>Ingresar</Link>
              </div>
        )}

        </div>
      
        <div className={`items justify-center gap-5 text-center items-center flex`}>
        <Link  >Registrarse</Link>
        <Link  >Ingresar </Link>
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
