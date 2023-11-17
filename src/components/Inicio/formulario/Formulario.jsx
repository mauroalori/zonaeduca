import ubicacion from "../../../assets/gifs-iconos/Ubicacion.png";
import telefono from "../../../assets/gifs-iconos/telefono.png";
import mail from "../../../assets/gifs-iconos/mail.png";
import "./formulario.css";

function Formulario() {
  return (

    // DIV GENERAL 
    <div className={`flex responsive items-center justify-center md:h-[80vh] h-[90vh] m-5 mb-32 `}>

      {/* FORM  */}
      <form
        action=""
        className="w-96 md:max-h-[28.4em] h-[900px] flex flex-col justify-center   shadow-lg shadow-gray-300 p-5 overflow-auto"
      >

        <h3 className="text-xl text-[#666666]">Contactanos</h3>

        {/* nombre  */}
        <div className="flex flex-col mt-5">
          <label htmlFor="nombre" className="text-[#666666]">Nombre</label>
          <input id="nombre" className="w-52 bordes text-xs text-[#03ABE6] p-1" type="text" placeholder="Nombre" required />
        </div>

        {/* correo  */}
        <div className="flex flex-col mt-5">
          <label htmlFor="correo" className="text-[#666666]">Correo</label>
          <input id="correo" className="w-52 bordes text-xs text-[#03ABE6] p-1" type="email" placeholder="Correo" required />
        </div>

        {/* asunto  */}
        <div className="flex flex-col mt-5">
          <label htmlFor="asunto" className="text-[#666666]">Asunto</label>
          <input id="asunto" className="w-72 bordes text-xs text-[#03ABE6] p-1" type="text" placeholder="Asunto" required />
        </div>

        {/* mensaje  */}
        <div className="flex flex-col mt-5">
          <label htmlFor="mensaje" className="text-[#666666]">Mensaje</label>
          <textarea name="" id="mensaje" className="w-72 h-16 bordes text-xs text-[#03ABE6] p-1 resize-none" type="text" placeholder="Mensaje" cols="10" rows="10" required></textarea>
        </div>


        <div className="flex justify-center items-center mt-8  mb-2">
          <button type="submit" className="m-auto bg-[#3DCCFF] text-white w-20 p-1 rounded-md hover:bg-[#1e8eb7] duration-200">
            Enviar
          </button>
        </div>


      </form>


      {/* CAJA GRADIENTE  */}
      <div className="w-96 h-[28.4em]  flex  justify-center items-center fondoFormulario shadow-lg shadow-gray-300">
        {/* CONTENEDOR ITEMS  */}
        <div className="m-auto flex  flex-col justify-center items-center md:gap-5 gap-2">
          {/* ITEMS  */}
          <div className="flex items-center p-1">
            <img src={ubicacion} alt="ubicacion" className="w-10" />
            <p className="text-white w-52 md:text-sm text-xs ">
              Lavalle 648 Piso 8, C1047AAN CABA, Argentina
            </p>

          </div>

          <div className="flex items-center p-1">
            <img src={telefono} alt="telefono" className="w-10" />
            <p className="text-white w-52 md:text-sm text-xs">11-1234-5678</p>
          </div>

          <div className="flex items-center p-1">
            <img src={mail} alt="mail" className="w-10" />
            <p className="text-white w-52 md:text-sm text-xs">zonaeduca@gmail.com</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Formulario;
