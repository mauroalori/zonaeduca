import UseColegio from "../../hooks/UseColegio";
import flecha from "../../assets/gifs-iconos/flecha.png";
import circulo from "../../assets/gifs-iconos/circulo.png";
import caracteristica from "../../assets/gifs-iconos/caracteristica.png";
import {BsArrowUpCircleFill} from "react-icons/bs"
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
      <div className="dato-colegio">
        <div className="nom-colegio">
          <Link to={"/colegios"} >
            <img src={flecha} alt="" className="icon-flecha fixed" />
          </Link>
          <h1 id="inicioDePagina" className="nombre-colegio">{colegio.nombre}</h1>
        </div>
        {/* FLECHA PARA ARRIBAR  */}
        <div>
        <Link>
        <BsArrowUpCircleFill className="text-[#00405B] hover:text-[#316d86] duration-200 text-5xl  right-0 m-6 z-10 bottom-0 fixed"/>
        </Link>
        </div>
        <div className="niveles">
          <ul>
            {colegio.nivel.map((nivel, index) => (
              <li key={index} className="nivel">
                {nivel}
              </li>
            ))}
          </ul>
        </div>
        <div className="descripcion-colegio">
          <div className="descrip-imagen">
            <img src={colegio.imagen} alt="" className="img-cole rounded-lg shadow-md shadow-gray-500" />
          </div>
          <div className="descrip-cole">
            <h2 className="item-cole">Descripcion</h2>
            <p>{colegio.descripcion}</p>
          </div>
        </div>
        <div className="contacto">
          <div>
            <h2 className="item-cole">Contacto</h2>
          </div>
          <div>
            <ul className="contact-info">
              <li>
                <img
                  src={circulo}
                  alt="IconoCirculo"
                  className="icon-circulo"
                />
                <p>
                  <strong>Tel:</strong> {colegio.telefono}
                </p>
              </li>
              <li>
                <img
                  src={circulo}
                  alt="IconoCirculo"
                  className="icon-circulo"
                />
                <p>
                  <strong>Mail:</strong> {colegio.mail}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="caracter-cole">
          <img src={caracteristica} alt="" className="icon-caracter" />
          <h2 className="item2-cole">Caracteristicas</h2>
        </div>
        <div>
          <h2 className="item-cole">Infraestructura</h2>
          <ul className="caracteristica">
            {colegio.caracteristicas.map((caracteristicas, index) => (
              <li key={index}>
                <img
                  src={circulo}
                  alt="IconoCirculo"
                  className="icon-circulo"
                />
                {caracteristicas}
              </li>
            ))}
          </ul>
        </div>
        <div className="idiomas">
          <h2 className="item-cole">Idiomas & Certificaciones</h2>
          <ul className="idiomas-list">
            {colegio.idiomas.map((idioma, index) => (
              <li key={index} className="idiomas-item">
                <img
                  src={circulo}
                  alt="IconoCirculo"
                  className="icon-circulo"
                />
                {idioma}
              </li>
            ))}
          </ul>
        </div>

        {/* MAPA  */}
        <div>
            <div className="p-5">
            <h1 className="font-bold text-2xl">Ubicacion</h1>
            <p>{colegio.domicilio}</p>
            </div>
          <GoogleMap
            zoom={12}
            center={center}
            mapContainerClassName="h-screen w-full"
          >
            <Marcador
              position={{
                lat:colegio.coordenadas.latitud,
                lng:colegio.coordenadas.longitud,
              }}
              icon={{
                url: iconMaps,
                scaledSize: new window.google.maps.Size(150, 90),
              }}
            />
          </GoogleMap>
        </div>
      </div>
    </>
  );
}
export default SeccionColegio;
