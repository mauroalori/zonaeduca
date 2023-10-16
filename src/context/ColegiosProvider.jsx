import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { datosColegios } from "../data/data";

const ColegioContext = createContext();
const ColegiosProvider = ({ children }) => {
  // DECLARAR ACA FUNCIONES
  {
    /* Recoleccion de los valores para los select desde los datos */
  }
  const departamentos = [],
    niveles = [],
    idiomas = [];

  datosColegios.forEach((colegio) => {
    if (
      !departamentos.includes(colegio.departamento) &&
      colegio.departamento !== ""
    ) {
      departamentos.push(colegio.departamento);
    }
    colegio.idiomas.forEach((idioma) => {
      if (!idiomas.includes(idioma)) {
        idiomas.push(idioma);
      }
    });
    colegio.nivel.forEach((nivel) => {
      if (!niveles.includes(nivel)) {
        niveles.push(nivel);
      }
    });
  });

  {
    /* Ordenamiento de los valores de los select */
  }
  departamentos.sort((a, b) => {
    const numeroA = parseInt(a.match(/\d+/));
    const numeroB = parseInt(b.match(/\d+/));

    return numeroA - numeroB;
  });
  niveles.sort();
  idiomas.sort();

  {
    /* Funciones para el manejo de los select */
  }
  const defaultSelect = "";

  const [selectedDepartamento, setSelectedDepartamento] =
    useState(defaultSelect);
  const [selectedNivel, setSelectedNivel] = useState(defaultSelect);
  const [selectedIdioma, setSelectedIdioma] = useState(defaultSelect);

  {
    /* Filtrado de los colegios */
  }
  const datosColegiosFiltrados = datosColegios.filter((colegio) => {
    return (
      (colegio.departamento === selectedDepartamento ||
        selectedDepartamento === defaultSelect) &&
      (colegio.idiomas.includes(selectedIdioma) ||
        selectedIdioma === defaultSelect) &&
      (colegio.nivel.includes(selectedNivel) ||
        selectedNivel === defaultSelect) &&
      !(
        selectedNivel === defaultSelect &&
        selectedIdioma === defaultSelect &&
        selectedDepartamento === defaultSelect
      )
    );
  });

  //COORDENADAS

  // KEY
  const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

  // EXTRAER LOS DOMICILIOS FILTRADOS
  const domiciliosFiltrados = datosColegiosFiltrados.map(
    (colegio) => colegio.domicilio
  );

  // ESTADOS 
  const [coordendasArray, setCoordendasArray] = useState([]);
  const [loadingCoords, setLoadingCoords] = useState(false);

  
  useEffect(() => {
    if (!loadingCoords) {
      if (domiciliosFiltrados.length > 0) {
        setLoadingCoords(true);
        const promises = domiciliosFiltrados.map(geocodeAddress);
        Promise.all(promises)
          .then((coordinates) => {
            setCoordendasArray(coordinates.filter((coordinate) => coordinate !== null));
            setLoadingCoords(false);
          })
          .catch((error) => {
            console.error("Error al cargar coordenadas:", error);
            setLoadingCoords(false);
          });
      } else {
        setLoadingCoords(false);
      }
    }
  }, [domiciliosFiltrados, loadingCoords]);

  console.log("desde provider", coordendasArray);

  // CONSULTAR A LA API DE GOOGLE Y BUSCAR LOS DOMICILIO
  function geocodeAddress(address) {
    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          return { lat, lng };
        } else {
          console.log("No se encontraron resultados para la dirección:", address);
          return null;
        }
      })
      .catch((error) => {
        console.error("Error al geocodificar la dirección:", error);
        return null;
      });
  }

  return (
    <ColegioContext.Provider
      value={{
        datosColegios,
        departamentos,
        niveles,
        idiomas,
        datosColegiosFiltrados,
        setSelectedDepartamento,
        setSelectedNivel,
        setSelectedIdioma,
        coordendasArray,
      }}
    >
      {children}
    </ColegioContext.Provider>
  );
};

ColegiosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ColegiosProvider };

export default ColegioContext;
