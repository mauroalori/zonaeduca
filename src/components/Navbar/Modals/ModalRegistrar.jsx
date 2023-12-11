import { IoClose } from "react-icons/io5";
import ImageModal from "./../../../assets/ImageModal.png";
import { useState } from "react";
import UseColegio from "../../../hooks/UseColegio";
import { auth } from "../../../firebase/firebase.config";

function ModalRegistrar({ showModal, setShowModal }) {
  const { register, loginWithGoogle, setVerificacion } = UseColegio();

  // ESTADOS
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");

  console.log(emailRegister, passwordRegister);

  // FUNCION REGISTRAR
  const handleRegister = async () => {
    try {
      await register(emailRegister, passwordRegister, nombreUsuario);
      alert("Registrado con éxito");
      setShowModal(false);
      setVerificacion(false)
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Ocurrio un error")
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle(auth);
      setVerificacion(false);
    } catch (error) {
      console.error("Error en el login con Google:", error);
      alert("Ocurrio un error")

    }
  };

  return (
    <>
      {showModal ? (
        <>
          {/* Código del modal aquí */}
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  {/*content*/}
                  <div className="rounded-lg shadow-lg relative flex flex-col w-full md:w-[90vw] lg:w-[55vw] h-[70vh] md:h-[70vh] lg:h-[85vh] bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                      <IoClose
                        className="ml-auto border-0 text-black float-right text-3xl font-semibold "
                        onClick={() => {
                          setShowModal(false);
                          handleCloseModal();
                          resetErrors(); // Reiniciar errores al cerrar el modal
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
                            Regístrate y forma parte de ZonaEduca!
                          </h1>
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 flex flex-col items-center order-1 md:order-2">
                        <h1 className="text-[#00405B] text-center mt-4 text-xl md:text-2xl lg:text-4xl font-bold">
                          Regístrate
                        </h1>
                        <form action="" className="flex flex-col items-center">
                          <div className="mt-6 md:mb-2 lg:mb-4 text-left">
                            <label
                              htmlFor="nombreApellido"
                              className="block text-gray-700 md:text-sm lg:text-lg"
                            >
                              Nombre y Apellido:
                            </label>
                            <input
                              type="text"
                              id="nombreApellido"
                              className="rounded-lg border border-gray-700 mt-2 lg:p-2 md:w-60 lg:w-80 h-9"
                              onChange={(e) => setNombreUsuario(e.target.value)}
                            />
                          </div>
                          <div className="md:mb-2 lg:mb-4 text-left">
                            <label
                              htmlFor="email"
                              className="block text-gray-700 md:text-sm lg:text-lg"
                            >
                              Email:
                            </label>
                            <input
                              type="text"
                              id="email"
                              className="rounded-lg border border-gray-700 mt-2 lg:p-2 md:w-60 lg:w-80 h-9"
                              onChange={(e) => setEmailRegister(e.target.value)}
                            />
                          </div>
                          <div className="md:mb-2 lg:mb-4 text-left">
                            <label
                              htmlFor="password"
                              className="block text-gray-700 md:text-sm lg:text-lg"
                            >
                              Contraseña:
                            </label>
                            <input
                              type="text"
                              id="password"
                              className="rounded-lg border border-gray-700 mt-2 lg:p-2 md:w-60 lg:w-80 h-9"
                              onChange={(e) =>
                                setPasswordRegister(e.target.value)
                              }
                            />
                          </div>
                          <div className="mt-8">
                            <button
                              className="bg-[#00729A] active:bg-[#001A29] text-white md:text-lg lg:text-2xl px-12 py-2 rounded-lg outline-none focus:outline-none"
                              type="button"
                              onClick={() => handleRegister()}
                            >
                              Regístrate
                            </button>

                            <button
                              className="bg-[#00729A] active:bg-[#001A29] text-white md:text-lg lg:text-2xl px-12 py-2 rounded-lg outline-none focus:outline-none mt-10"
                              type="button"
                              onClick={() => handleGoogle()}
                            >
                              Google
                            </button>
                          </div>
                          
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );
}

export default ModalRegistrar;
