import UseColegio from "../../../hooks/UseColegio";
import { Link } from "react-router-dom";

function ListadoColegios() {
  const { datosColegiosFiltrados } = UseColegio();

  const datos = datosColegiosFiltrados.length > 0;

  return (
    <section className="w-full">
      <h1 className="text-[#00405B] text-3xl  m-5 font-medium lg:ml-20 ml-5">
        Colegios en esta zona
      </h1>

      {datos ? (
        datosColegiosFiltrados.map((colegio) => (
          <div
            key={colegio.id}
            className="w-[90%] h-auto m-auto mt-5 mb-5 lg:h-80 shadow-md shadow-gray-700  bg-[#001A29] rounded-md flex flex-col lg:flex-row justify-around items-center"
          >
            {/* IMAGE  */}
            <div className="p-4">
              <img
                src={colegio.imagen}
                alt={colegio.nombre}
                className="w-72 h-72 rounded-md"
              />
            </div>
            {/* INFORMACION  */}
            <div className="flex flex-col w-96 lg:p-0 p-10">
              <h3 className="text-white text-center text-xl font-medium">
                {colegio.nombre}
              </h3>

              <p className="text-white text-left mt-5 text-sm font-medium w-full h-32 overflow-auto">
                {colegio.descripcion}
              </p>
              <Link className="m-auto" to={`/colegios/${colegio.id}`}>
                <button className="m-auto w-32 h-10 mt-5 bg-[#00729A] hover:bg-[#165870] duration-200 text-white rounded-lg">
                  VER
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1 className="text-center text-xl m-5 text-[#00729A]">No se encuentran colegios</h1>
        </div>
      )}
    </section>
  );
}

export default ListadoColegios;
