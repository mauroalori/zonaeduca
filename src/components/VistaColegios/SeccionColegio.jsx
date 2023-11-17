import UseColegio from "../../hooks/UseColegio";
import Ubicacion1 from "../../assets/gifs-iconos/ubica1.png";
import caracteristica from "../../assets/gifs-iconos/caracteristica.png";
import { BsArrowUpCircleFill, BsArrowLeftCircle } from "react-icons/bs";
import { VscCircleFilled } from "react-icons/vsc";
import "./SeccionColegio.css";
import { Link, useParams } from "react-router-dom";
import iconMaps from "../../assets/gifs-iconos/ubiColegio.png";
import { GoogleMap, MarkerF as Marcador } from "@react-google-maps/api";

function SeccionColegio() {
  // Dirigirme a la parte superior de la vista
  window.scrollTo(0, 0);

  const { datosColegios } = UseColegio();

  let { id } = useParams();
  const colegio = datosColegios.find(
    (colegio) => colegio.id === Number.parseInt(id)
  );

  const center = { lat: -34.612181, lng: -58.441959 };

  return (
    <>
      <div className="text-[#00405B]">
        {/* FLECHA PARA IR ATRAS*/}
        <div className="w-20 mt-24">
          <Link to={"/colegios"} >
            <BsArrowLeftCircle className="text-[#00405B] hover:text-[#316d86] duration-200 text-5xl  right-0 ml-2 md:ml-6 z-10" />
          </Link>
        </div>
        <h1 id="inicioDePagina" className="text-center text-xl mt-4 md:text-2xl lg:text-3xl font-semibold">{colegio.nombre}</h1>
        {/* FLECHA PARA ARRIBAR  */}
        <div>
          <Link>
            <BsArrowUpCircleFill className="text-[#00405B] hover:text-[#316d86] duration-200 text-5xl  right-0 m-6 z-10 bottom-0 fixed" />
          </Link>
        </div>
        <div className="flex justify-center">
          <ul>
            {colegio.nivel.map((nivel, index) => (
              <li key={index} className="m-4 p-3 bg-green-200 rounded-[1.2rem] inline-block space-x-8">
                {nivel}
              </li>
            ))}
          </ul>
        </div>
        <img src={colegio.imagen} alt="" className="w-full h-70 object-fill shadow-md shadow-gray-500" />
        <h2 className="text-xl md:text-2xl font-semibold ml-8 mt-8">Descripcion</h2>
        <p className="text-sm md:text-lg ml-8 mt-4">{colegio.descripcion}</p>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 ">
            <h2 className="text-xl md:text-2xl font-semibold ml-8 mt-16">Contacto</h2>
            <ul className="text-xs md:text-sm">
              <li className="flex items-center mt-4 mb-2 ml-10 md:ml-16">
                <VscCircleFilled className="text-[#0097D7] text-xl md:text-2xl" />
                <p><strong className="font-semibold">Tel:</strong> {colegio.telefono}</p>
              </li>
              <li className="flex items-center mt-4 mb-2 ml-10 md:ml-16">
                <VscCircleFilled className="text-[#0097D7] text-xl md:text:2xl" />
                <p><strong className="font-semibold">Mail:</strong> {colegio.mail}</p>
              </li>
            </ul>

            <div className="flex items-center mt-8 ml-8">
              <img src={caracteristica} alt="" className="w-9 h-9" />
              <h2 className="text-xl md:text-2xl font-semibold ml-4">Caracteristicas</h2>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold ml-8 mt-6">Infraestructura</h2>
              <ul className="text-xs md:text-sm">
                {colegio.caracteristicas.map((caracteristicas, index) => (
                  <li key={index} className="flex items-center mt-2 mb-2 ml-16">
                    <VscCircleFilled className="text-[#0097D7] text-xl md:text-2xl" />
                    {caracteristicas}
                  </li>
                ))}
              </ul>
            </div>
              <h2 className="text-lg md:text-xl font-semibold ml-8 mt-6">Idiomas & Certificaciones</h2>
              <ul className="text-xs md:text-sm flex list-none ml-16 mt-4">
                {colegio.idiomas.map((idioma, index) => (
                  <li key={index} className="flex items-center mr-4">
                    <VscCircleFilled className="text-[#0097D7] text-xl md:text-2xl" />
                    {idioma}
                  </li>
                ))}
              </ul>
          </div>

          {/* MAPA  */}
          <div className="max-w-600 mt-2 md:w-1/2 ">
            <div className="text-sm sm: ml-10 lg:ml-2">
              <div className="flex items-center mt-14">
                <img src={Ubicacion1} alt="" className="w-8 h-8" />
                <h2 className="text-xl md:text-2xl font-semibold ml-2">Ubicacion</h2>
              </div>

              <p className="text-xs md:text-sm mt-6 mb-6 ml-6">{colegio.domicilio}</p>
            </div>
            <GoogleMap
              zoom={13}
              center={center}
              mapContainerStyle={{ height: '300px', width: '100%' }}
            >
              <Marcador
                position={{
                  lat: colegio.coordenadas.latitud,
                  lng: colegio.coordenadas.longitud,
                }}
                icon={{
                  url: iconMaps,
                  scaledSize: new window.google.maps.Size(50, 70),
                }}
              />
            </GoogleMap>
          </div>
        </div>

      </div>
    </>
  );
}
export default SeccionColegio;
