import  {useState, useEffect} from "react";
import logo from './../../assets/logo.png'
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {

    const [Open, setOpen] = useState(false);

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


  return (
    <>
      <nav className={`navBar ${Open && "open"} ${scrolling && "scrolled"}`}>

        <div className={`navLogo ${Open && "open"}`}>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-44"/>
          </Link>
        </div>

        <div className={`items ${Open && "open"} justify-start text-center items-center flex`}>
          <Link to={'/'}>Inicio</Link>
          <Link to={'/Colegios'}>Colegios</Link>
          <Link to={'/Contacto'}>Contacto</Link>
          <Link to={'/Ayuda'}>Ayuda </Link>

          {window.innerWidth < 968 && Open &&(
            //Aqui se debe consultar si el usuario esta loggeado o no
            false ? (
              <div className="mt-10">
                <Link>Registrarse</Link>
                <Link>Ingresar </Link>
              </div>
              ):(
              //Aqui se debe acceder al nombre de usuario
              <div className="mt-10">
                <p>Hola, {"Mauro"}</p>
              </div>
            )
          )}
        </div>
        
        <div className={`items justify-center gap-5 text-center items-center flex`}>
          {/*Aqui se debe consultar si el usuario esta loggeado o no*/}
          { false ? ( 
            <div>
              <Link>Registrarse</Link>
              <Link>Ingresar </Link>
            </div>
            ):(
            //Aqui se debe acceder al nombre de usuario
            <p>Hola, {"Mauro"}</p>
          )}
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
