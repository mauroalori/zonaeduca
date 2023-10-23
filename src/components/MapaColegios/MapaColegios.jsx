import {
  GoogleMap,
  useLoadScript,
  MarkerF as Marcador,
  InfoWindow,
} from "@react-google-maps/api";
import iconMaps from "../../assets/gifs-iconos/ubiColegio.png";
import UseColegio from "../../hooks/UseColegio";
import { useState } from "react";
import { Link } from "react-router-dom";

function MapaColegios() {
  const { datosColegiosFiltrados } = UseColegio();

  const hayDatos = datosColegiosFiltrados.length > 0;

  const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  const [selectedColegio, setSelectedColegio] = useState(null);
  if (!isLoaded) return <div>Loading...</div>;

  const center = { lat: -34.612181, lng: -58.441959 };

  return (
    <>
      {hayDatos ? (
        <>
          <GoogleMap
            zoom={12}
            center={center}
            mapContainerClassName="h-screen w-full"
          >
            {datosColegiosFiltrados.map((colegio) => (
              <Marcador
                key={colegio.id}
                position={{
                  lat: colegio.coordenadas.latitud,
                  lng: colegio.coordenadas.longitud,
                }}
                icon={{
                  url: iconMaps,
                  scaledSize: new window.google.maps.Size(150, 90),
                }}
                onClick={() => setSelectedColegio(colegio)} 
              />
            ))}

            {selectedColegio && (
              <InfoWindow
                position={{
                  lat: selectedColegio.coordenadas.latitud,
                  lng: selectedColegio.coordenadas.longitud,
                }}
                onCloseClick={() => setSelectedColegio(null)} 
              >
                <div className="w-44">
                  <h2 className="font-semibold mb-5">{selectedColegio.nombre}</h2>
                  <img
                    src={selectedColegio.imagen}
                    alt="imagen"
                    className="w-full h-32"
                  />
                  
                  <Link to={`/colegios/${selectedColegio.id}`} >
                    <p className="w-24 p-2 m-auto mt-3 border-solid border-2 border-[#00729A] hover:border-[#1f4d5e] text-center font-medium  rounded-lg text-[#00729A] hover:text-[#1f4d5e] duration-100">Ver detalles</p>
                  </Link>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </>
      ) : (
        <div>
          <h1 className="text-center m-8 text-2xl text-[#00729A]">
            No se encuentran colegios
          </h1>

          <GoogleMap
            zoom={12}
            center={center}
            mapContainerClassName="h-screen w-full"
          >
            <Marcador
              position={center}
              icon={{
                url: iconMaps,
                scaledSize: new window.google.maps.Size(150, 90),
              }}
            />
          </GoogleMap>
        </div>
      )}
    </>
  );
}

export default MapaColegios;
