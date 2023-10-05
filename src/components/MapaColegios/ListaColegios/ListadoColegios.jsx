import { datosColegios } from "../../../data/data"
import UseColegio from "../../../hooks/UseColegio"

function ListadoColegios() {

  const {saludo} = UseColegio();

  saludo();

  return (
    <section className="w-full">
      <h1 className="text-[#00405B] text-3xl  m-5 font-medium lg:ml-20 ml-5">Colegios en esta zona</h1>

      {datosColegios.slice(0,3).map((colegio) => (
        <div key={colegio.id} className="w-[90%] h-auto m-auto mt-5 mb-5 lg:h-80 shadow-md shadow-gray-700  bg-[#001A29] rounded-md flex flex-col lg:flex-row justify-around items-center">
          {/* IMAGE  */}
          <div className="p-4">
            <img src={colegio.imagen} alt={colegio.nombre} className="w-72 h-72 rounded-md" />
          </div>
          {/* INFORMACION  */}
          <div className="flex flex-col w-96 lg:p-0 p-10">
            <h3 className="text-white text-center text-xl font-medium">{colegio.nombre}</h3>

            <p className="text-white text-left mt-5 text-sm font-medium w-full h-32 overflow-auto">{colegio.descripcion}</p>

            <button className="m-auto w-32 h-10 mt-5 bg-[#00729A] hover:bg-[#165870] duration-200 text-white rounded-lg">VER</button>
          </div>
        </div>
      ))}

    </section>
    
  )
}

export default ListadoColegios
