import { GoogleMap, useLoadScript } from '@react-google-maps/api';

function MapaColegios() {
  const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <GoogleMap 
        zoom={12} 
        center={{lat: -34.612181, lng: -58.441959}} 
        mapContainerClassName="h-screen w-full"
      >

      </GoogleMap>
    </>
  );
}

export default MapaColegios