import { useState, useEffect } from "react";
import logo from './../../assets/logo.png'
import { Link } from "react-router-dom";
import ModalRegistrar from "./Modals/ModalRegistrar";
import ModalLogin from "./Modals/ModalLogin";
import './Navbar.css';
import UseColegio from "../../hooks/UseColegio";

function Navbar() {

  const { verificacion, user } = UseColegio();

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [Open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && showLoginModal !== true && showRegisterModal !== true && Open) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showLoginModal, showRegisterModal]);
  
  
  return (
    <>
      <nav className={`navBar ${Open && "open"} ${scrolling && "scrolled"}`}>

        <div className={`navLogo ${Open && "open"}`}>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-44" />
          </Link>
        </div>

        <div className={`items ${Open && "open"} justify-start text-center items-center flex`}>
          <Link className="text-white" to={'/'}>Inicio</Link>
          <Link className="text-white" to={'/Colegios'}>Colegios</Link>
          <Link className="text-white" to={'/Contacto'}>Contacto</Link>
          <Link className="text-white" to={'/Ayuda'}>Ayuda </Link>

          {window.innerWidth < 968 && Open && (
            //Aqui se debe consultar si el usuario esta loggeado o no
            verificacion ? (
              <div>
                <button
                  className="active:bg-[#001A29] text-white text-lg px-2 py-4 outline-none focus:outline-none"
                  type="button"
                  onClick={() => setShowRegisterModal(true)}
                  style={{ transition: "all .15s ease" }}
                >
                  Registrarse
                </button>
                <ModalRegistrar
                  showModal={showRegisterModal}
                  setShowModal={setShowRegisterModal}
                  open={Open}
                />
                <button
                  className="active:bg-[#001A29] text-white text-lg px-2 py-4 outline-none focus:outline-none"
                  type="button"
                  onClick={() => setShowLoginModal(true)}
                  style={{ transition: "all .15s ease" }}
                >
                  Iniciar Sesión
                </button>
                <ModalLogin
                  showModal={showLoginModal}
                  setShowModal={setShowLoginModal}
                />
              </div>) : (
              //Aqui se debe acceder al nombre de usuario
              <div className="mt-10 text-white">
                <p className="text-white" >Hola, {user.displayName}</p>
              </div>
            )
          )}

        </div>

        <div className={`items justify-center gap-4 text-center items-center flex`}>
          {/*Aqui se debe consultar si el usuario esta loggeado o no*/}
          {verificacion ? (
            <div>
              <button
                className="active:bg-[#001A29] text-white text-lg px-2 py-4 outline-none focus:outline-none"
                type="button"
                onClick={() => setShowRegisterModal(true)}
                style={{ transition: "all .15s ease" }}
              >
                Registrarse
              </button>
              <ModalRegistrar
                showModal={showRegisterModal}
                setShowModal={setShowRegisterModal}
              />
              <button
                className="active:bg-[#001A29] text-white text-lg px-2 py-4 outline-none focus:outline-none"
                type="button"
                onClick={() => setShowLoginModal(true)}
                style={{ transition: "all .15s ease" }}
              >
                Iniciar Sesión
              </button>
              <ModalLogin
                showModal={showLoginModal}
                setShowModal={setShowLoginModal}
              />

            </div>
          ) : (
            //Aqui se debe acceder al nombre de usuario
            <p className="text-white">Hola, {user.displayName}</p>
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
