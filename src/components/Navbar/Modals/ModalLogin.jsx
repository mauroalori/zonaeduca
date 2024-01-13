import { IoClose } from "react-icons/io5";
import ImageModal from "./../../../assets/ImageModal.png";
import { useState } from "react";
import UseColegio from "../../../hooks/UseColegio";

function ModalLogin({ showModal, setShowModal }) {
  const { login, setVerificacion } = UseColegio();

  // Estados
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [errors, setErrors] = useState({});

  console.log(emailLogin, passwordLogin);
  const isValidEmail = (email) => {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    // Validación del formulario
    const errors = {};
    if (!emailLogin.trim()) {
      errors.email = "Campo requerido";
    } else if (!isValidEmail(emailLogin)) {
      errors.email = "Formato de correo electrónico no válido";
    }
    if (!passwordLogin.trim()) {
      errors.password = "Campo requerido";
    } else if (passwordLogin.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (Object.keys(errors).length > 0) {
      // Si hay errores, actualiza el estado y no intenta hacer el login
      setErrors(errors);
      return;
    }
    try {
      await login(emailLogin, passwordLogin);
      alert("Logueado con éxito");
      setShowModal(false)
      setVerificacion(false)
    } catch (error) {
      console.error("Error al loguear:", error);
      alert("Ocurrio un error")

    }
  };

  return (
    <>
      {showModal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          {showModal ? (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              {/*content*/}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full md:w-[90vw] lg:w-[55vw] h-[70vh] md:h-[70vh] lg:h-[85vh] bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <IoClose
                    className="ml-auto border-0 text-black float-right text-3xl font-semibold cursor-pointer hover:text-gray-500"
                    onClick={() => {
                      setShowModal(false);
                      handleCloseModal();
                      setErrors({}); // Reiniciar errores al cerrar el modal
                    }}
                  />
                </div>
                {/*body*/}
                <div className="flex flex-col md:flex-row w-full relative overflow-y-auto max-w-screen-lg">
                  <div className="w-full md:w-1/2 md:order-1">
                    {/* Ocultar la imagen en pantallas pequeñas */}
                    <img
                      src={ImageModal}
                      alt=""
                      className="hidden md:block h-[40vh] w-full md:h-[75vh] lg:h-[75vh] object-cover rounded-xl"
                    />
                    <div className="md:absolute bottom-44 md:bottom-4 lg:bottom-24 left-12 md:left-8">
                      <h1 className="text-white text-left text-lg md:text-[1.5rem] lg:text-[2rem] md:w-60">
                        Bienvenidos!
                      </h1>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-center order-1 md:order-2">
                    <h1 className="text-[#00405B] text-center mt-16 text-xl md:text-2xl lg:text-4xl font-bold">
                      Iniciar Sesión
                    </h1>
                    <form action="" className="flex flex-col items-center">
                      <div className="mt-16 md:mb-2 lg:mb-4 text-left">
                        <label
                          htmlFor="email"
                          className="block text-gray-700 md:text-sm lg:text-lg"
                        >
                          Email:
                        </label>
                        <input
                          type="text"
                          id="usuario"
                          className={`rounded-lg border border-gray-700 mt-2 lg:p-2 md:w-60 lg:w-80 ${errors.email ? "border-red-500" : ""
                            }`}
                          onChange={(e) => setEmailLogin(e.target.value)}
                        />
                        {errors.email && (
                          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div className="md:mb-2 lg:mb-4 text-left">
                        <label
                          htmlFor="password"
                          className="block text-gray-700 md:text-sm lg:text-lg"
                        >
                          Contraseña:
                        </label>
                        <input
                          type="password"
                          id="password"
                          className={`rounded-lg border border-gray-700 mt-2 lg:p-2 md:w-60 lg:w-80 ${errors.password ? "border-red-500" : ""
                            }`}
                          onChange={(e) => setPasswordLogin(e.target.value)}
                        />
                        {errors.password && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.password}
                          </p>
                        )}

                      </div>
                      <div className="mt-8">
                        <button
                          className="bg-[#00729A] active:bg-[#001A29] text-white md:text-lg lg:text-2xl px-12 py-2 rounded-lg outline-none focus:outline-none"
                          type="button"
                          onClick={() => handleLogin()}
                        >
                          Iniciar Sesión
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
export default ModalLogin;
