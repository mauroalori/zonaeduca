import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Colegios } from "../data/data";

const ColegioContext = createContext();
const ColegiosProvider = ({ children }) => {
  // DECLARAR ACA FUNCIONES
  {
    /* Recoleccion de los valores para los select desde los datos */
  }
  const rutaAPIColegios = ''
  const [datosColegios, setDatosColegios] = useState ([]);
  
  {/* CONSUMO DE NUESTRA API */}
  useEffect (() => {
    // función asíncrona para hacer el fetch
    (async function() {
      try {
        const respuesta = await fetch (rutaAPIColegios);
        const datosColegios = await respuesta.json ();
        setDatosColegios (datosColegios);
      } catch (error) {
        console.error ('Error al obtener los datos de los colegios:', error);
        setDatosColegios (Colegios);
      }
    }());
  }, []);

  const 
    departamentos = [],
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

  // Colegios Recomendados aleatorios
  const colegiosRecomendados = datosColegios.sort(() => Math.random() - 0.5).slice(0, 10);
    
      return (
    <ColegioContext.Provider
      value={{
        datosColegios,
        departamentos,
        niveles,
        idiomas,
        datosColegiosFiltrados,
        colegiosRecomendados,
        setSelectedDepartamento,
        setSelectedNivel,
        setSelectedIdioma,
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
