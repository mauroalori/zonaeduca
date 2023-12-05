import React from "react";
import { IoClose } from "react-icons/io5";
import ImageModal from "./../../../assets/ImageModal.png"

function ModalRegistrar({ showModal, setShowModal }) {

    return (
        <>
            {showModal ? (
                <>
                    {/* Código del modal aquí */}
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >

                                    {/*content*/}
                                    <div className="rounded-lg shadow-lg relative flex flex-col w-[55vw] md:w-[90vw] lg:w-[55vw] h-[70vh] md:h-[70vh] lg:h-[85vh] bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                                            <IoClose className="ml-auto border-0 text-black float-right text-3xl font-semibold cursor-pointer"
                                                onClick={() => {
                                                    setShowModal(false);
                                                    handleCloseModal();
                                                    resetErrors(); // Reiniciar errores al cerrar el modal
                                                }} />
                                        </div>
                                        {/*body*/}
                                        <div className="flex flex-col md:flex-row w-full relative overflow-y-auto max-w-screen-lg">
                                            <div className=" w-full md:w-1/2  md:order-1">
                                                <img src={ImageModal} alt="" className="h-40 w-full md:h-[75vh] lg:h-[75vh] object-cover rounded-xl" />
                                                <div className="absolute bottom-44 md:bottom-4 lg:bottom-24 left-12 md:left-8">
                                                    <h1 className="text-white text-left text-lg md:text-[1.5rem] lg:text-[2rem] md:w-60">Registrate y forma parte de ZonaEduca!</h1>
                                                </div>
                                            </div>

                                            <div className="w-full md:w-1/2 flex flex-col items-center order-1 md:order-2">
                                                <h1 className="text-[#00405B] text-center mt-4 text-xl md:text-2xl lg:text-4xl font-bold">Regístrate</h1>
                                                <form action="" className="flex flex-col items-center">
                                                    <div className="mt-6 md:mb-2 lg:mb-4">
                                                        <label htmlFor="nombreApellido" className="block text-gray-700 md:text-sm lg:text-lg">Nombre y Apellido:</label>
                                                        <input
                                                            type="text"
                                                            id="nombreApellido"
                                                            className="rounded-lg border border-gray-700 mt-2 lg:p-2 md:w-60 lg:w-80"
                                                        />
                                                    </div>
                                                    <div className="md:mb-2 lg:mb-4">
                                                        <label htmlFor="usuario" className="block text-gray-700 md:text-sm lg:text-lg">Usuario:</label>
                                                        <input
                                                            type="text"
                                                            id="usuario"
                                                            className="rounded-lg border border-gray-700 mt-2 lg:p-2 md:w-60 lg:w-80"
                                                        />
                                                    </div>
                                                    <div className="md:mb-2 lg:mb-4">
                                                        <label htmlFor="email" className="block text-gray-700 md:text-sm lg:text-lg">Email:</label>
                                                        <input
                                                            type="text"
                                                            id="email"
                                                            className="rounded-lg border border-gray-700 mt-2 lg:p-2 md:w-60 lg:w-80"
                                                        />
                                                    </div>
                                                    <div className="md:mb-2 lg:mb-4">
                                                        <label htmlFor="password" className="block text-gray-700 md:text-sm lg:text-lg">Contraseña:</label>
                                                        <input
                                                            type="text"
                                                            id="password"
                                                            className="rounded-lg border border-gray-700 mt-2 lg:p-2 md:w-60 lg:w-80"
                                                        />
                                                    </div>
                                                    <div className="mt-8">
                                                        <button className="bg-[#00729A] active:bg-[#001A29] text-white md:text-lg lg:text-2xl px-12 py-2 rounded-lg outline-none focus:outline-none" type="button">Registrate</button>
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
