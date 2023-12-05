import SliderComentarios from "./swiperComentarios/SliderComentarios"
import AgregarComentarios from "./agregarComentarios/AgregarComentarios"

function SeccionComentarios() {

  

  return (
    <div>

    <h1 className="text-center text-4xl m-5 mt-20 uppercase text-[#00405B]">Comentarios</h1>      

    <SliderComentarios/>
    
    <AgregarComentarios/>
    
    </div>
  )
}

export default SeccionComentarios
