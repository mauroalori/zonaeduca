import {
  GoogleMap,
  useLoadScript,
  MarkerF as Marcador,
} from "@react-google-maps/api";
import iconMaps from "../../assets/gifs-iconos/ubiColegio.png";
import UseColegio from "../../hooks/UseColegio";

function MapaColegios() {
  const { datosColegiosFiltrados } = UseColegio();

  const hayDatos = datosColegiosFiltrados.length > 0;

  const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  const center = { lat: -34.612181, lng: -58.441959 };

  return (
    <>

      {hayDatos ? (
        <div>
        <GoogleMap
          zoom={12}
          center={center}
          mapContainerClassName="h-screen w-full"
        >
          {datosColegiosFiltrados.map(colegio => (
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
            />
          ))}

        </GoogleMap>
        </div>
      ) : (
        <div>
          <h1 className="text-center m-8 text-2xl text-[#00729A]">No se encuentran colegios</h1>


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
