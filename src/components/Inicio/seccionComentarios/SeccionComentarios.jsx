import { button } from "@material-tailwind/react"
import SliderComentarios from "./swiperComentarios/SliderComentarios"
import { Link } from "react-router-dom"

function SeccionComentarios() {

  const manejarEnvio = (e) => {
    e.preventDefault()
  }

  return (
    <div>

    <h1 className="text-center text-4xl m-5 mt-20 uppercase text-[#00405B]">Comentarios</h1>      

    <SliderComentarios/>
    
    <div className="flex flex-col items-center pb-14">
      <h2 className="text-center text-xl text-[#00405B] mb-10">¡Dejanos tu comentario!</h2>
      <form onSubmit={manejarEnvio} id="form-comentario" className="flex flex-col gap-5 items-center">
        <textarea name="comentario" cols="20" rows="10" placeholder="Escribe tu comentario" className="w-full border-brown-300"></textarea>
        {false ? (
          <input type="submit" value="Enviar" className="m-auto bg-[#3DCCFF] text-white w-20 p-1 rounded-md hover:bg-[#1e8eb7] duration-200 cursor-pointer"/>
        ):(
          <Link to={"/Login"}>
            <button className="m-auto bg-[#3DCCFF] text-white py-2 px-4 rounded-md hover:bg-[#1e8eb7] duration-200 cursor-pointer">Iniciar Sesion</button>
          </Link>
        )}
      </form>
    </div>

    
    </div>
  )
}

export default SeccionComentarios
