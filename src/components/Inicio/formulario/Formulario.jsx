import ubicacion from "../../../assets/gifs-iconos/Ubicacion.png";
import telefono from "../../../assets/gifs-iconos/telefono.png";
import mail from "../../../assets/gifs-iconos/mail.png";
import "./formulario.css";

function Formulario() {
  return (

    // DIV GENERAL 
    <div className={`flex ${window.innerWidth < 768 ? 'flex-col' : ''} items-center justify-center md:h-[80vh] h-[90vh] m-5`}>

      {/* FORM  */}
      
        <form
          action=""
          className="md:w-96 md:h-[90%] w-80 flex flex-col justify-center   shadow-lg shadow-gray-300 p-5"
        >

        <h3 className="text-xl text-[#666666]">Contactanos</h3>

        {/* nombre  */}
        <div className="flex flex-col mt-5">
            <label htmlFor="nombre" className="text-[#666666]">Nombre</label>
            <input id="nombre" className="w-52 bordes text-xs text-[#03ABE6] p-1" type="text" placeholder="Nombre" required/>
        </div>

        {/* correo  */}
        <div className="flex flex-col mt-5">
            <label htmlFor="correo" className="text-[#666666]">Correo</label>
            <input id="correo" className="w-52 bordes text-xs text-[#03ABE6] p-1" type="email" placeholder="Correo" required/>
        </div>

        {/* asunto  */}
        <div className="flex flex-col mt-5">
            <label htmlFor="asunto" className="text-[#666666]">Asunto</label>
            <input id="asunto" className="w-72 bordes text-xs text-[#03ABE6] p-1" type="text" placeholder="Asunto" required/>
        </div>

        {/* mensaje  */}
        <div className="flex flex-col mt-5">
            <label htmlFor="mensaje" className="text-[#666666]">Mensaje</label>
            <textarea name="" id="mensaje" className="w-72 h-20 bordes text-xs text-[#03ABE6] p-1" type="text" placeholder="Mensaje" cols="10" rows="10" required></textarea>
        </div>

     
         <div className="flex justify-center items-center mt-10">
         <button type="submit" className="m-auto bg-[#3DCCFF] text-white w-20 p-1 rounded-md hover:bg-[#1e8eb7] duration-200">
            Enviar
          </button>
        </div> 
     

        </form>


      {/* CAJA GRADIENTE  */}
      <div className="w-80 h-[90%] flex  justify-center items-center fondoFormulario shadow-lg shadow-gray-300">
        {/* CONTENEDOR ITEMS  */}
        <div className="m-auto flex flex-col justify-center items-center gap-5">
          {/* ITEMS  */}
          <div className="flex items-center">
            <img src={ubicacion} alt="ubicacion" className="w-10" />
            <p className="text-white w-52 text-sm">
              Lavalle 648 Piso 8, C1047AAN CABA, Argentina
            </p>
          </div>

          <div className="flex items-center">
            <img src={telefono} alt="telefono" className="w-10" />
            <p className="text-white w-52 text-sm">11-1234-5678</p>
          </div>

          <div className="flex items-center">
            <img src={mail} alt="mail" className="w-10" />
            <p className="text-white w-52 text-sm">zonaeduca@gmail.com</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Formulario;
