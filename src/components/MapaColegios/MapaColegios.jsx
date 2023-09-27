import { GoogleMap, useLoadScript, MarkerF as Marcador } from '@react-google-maps/api';

function MapaColegios() {
  const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  const center = {lat: -34.612181, lng: -58.441959}

  return (
    <>
      <GoogleMap 
        zoom={12} 
        center={center} 
        mapContainerClassName="h-screen w-full"
      >
        <Marcador position={center}/>
      </GoogleMap>
    </>
  );
}

export default MapaColegios