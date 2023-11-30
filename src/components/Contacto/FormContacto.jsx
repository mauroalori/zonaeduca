import Fondocole from "./../../assets/fondocole.png";
import UbiGoogle from "./../../assets/gifs-iconos/ubi-google.png"
import Telefono1 from "./../../assets/gifs-iconos/Telefono1.png"
import mail from "./../../assets/gifs-iconos/Gmail.png"
import insta from "./../../assets/gifs-iconos/instagramCon.png"
import face from "./../../assets/gifs-iconos/facebookCon.png"
import twiter from "./../../assets/gifs-iconos/twiterCon.png"
function FormContacto() {
    return (


        <div className={`flex flex-col items-center justify-center h-[148vh]  bg-cover`} style={{ backgroundImage: `url(${Fondocole})` }}>
            <div className="text-white text-center mt-2">
                <h1 className="text-3xl md:text-[2.5rem] mb-12">FORMULARIO DE CONTACTO</h1>
            </div>

            <div className={`flex flex-col sm:flex-row items-center justify-center`}>
                {/* CAJA  */}
                <div className="flex w-[16rem] md:w-[22rem] lg:w-[30rem] h-[23rem] md:h-[22rem] lg:h-[30rem] justify-center items-center bg-white shadow-lg shadow-gray-300">
                    {/* CONTENEDOR ITEMS  */}
                    <div className="w-[16rem] md:w-[22rem] lg:w-[30rem] m-auto flex flex-col justify-center items-center md:mb-36 md:gap-6 gap-2 p-12">
                        {/* ITEMS  */}
                        <div className="flex items-center p-4">
                            <img src={UbiGoogle} alt="ubicacion" className="w-10" />
                            <p className="text-black w-52 md:text-sm text-xs ">
                                Lavalle 648 Piso 8, C1047AAN CABA, Argentina
                            </p>

                        </div>

                        <div className="flex items-center p-4">
                            <img src={Telefono1} alt="telefono" className="w-9" />
                            <p className="text-black w-52 md:text-sm text-xs">11-1234-5678</p>
                        </div>

                        <div className="flex items-center p-4">
                            <img src={mail} alt="mail" className="w-10" />
                            <p className="text-black w-52 md:text-sm text-xs">zonaeduca@gmail.com</p>
                        </div>
                        <div className="flex items-center p-2">
                            <img src={insta} alt="instagram" className="w-9 mr-6"/>
                            <img src={face} alt="facebook" className="w-9 mr-6" />
                            <img src={twiter} alt="twiter" className="w-9 mr-3" />
                        </div>
                    </div>
                </div>
                <div>
                    <form
                        action=""
                        className="bg-white w-[16rem] md:w-[22rem] lg:w-[30rem] h-[24rem] md:h-[22rem] lg:h-[30rem] flex flex-col justify-center shadow-lg shadow-gray-300 p-5 overflow-auto"
                    >

                        {/* nombre  */}
                        <div className="flex flex-col mt-5">
                            <label htmlFor="nombre" className="text-[#666666]">Nombre</label>
                            <input id="nombre" className="w-50 sm:w-72 bordes text-xs text-[#03ABE6] p-1" type="text" placeholder="Nombre" required />
                        </div>

                        {/* correo  */}
                        <div className="flex flex-col mt-5">
                            <label htmlFor="correo" className="text-[#666666]">Correo</label>
                            <input id="correo" className="w-50 sm:w-72 bordes text-xs text-[#03ABE6] p-1" type="email" placeholder="Correo" required />
                        </div>

                        {/* asunto  */}
                        <div className="flex flex-col mt-5">
                            <label htmlFor="asunto" className="text-[#666666]">Asunto</label>
                            <input id="asunto" className="w-50 sm:w-72 bordes text-xs text-[#03ABE6] p-1" type="text" placeholder="Asunto" required />
                        </div>

                        {/* mensaje  */}
                        <div className="flex flex-col mt-5">
                            <label htmlFor="mensaje" className="text-[#666666]">Mensaje</label>
                            <textarea name="" id="mensaje" className="w-50 sm:w-72 h-16 bordes text-xs text-[#03ABE6] p-1 resize-none" type="text" placeholder="Mensaje" cols="10" rows="10" required></textarea>
                        </div>


                        <div className="flex justify-center items-center mt-8  mb-2">
                            <button type="submit" className="m-auto bg-[#3DCCFF] text-white w-20 p-1 rounded-md hover:bg-[#1e8eb7] duration-200">
                                Enviar
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormContacto;
