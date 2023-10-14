import { createContext, useState } from "react"
import PropTypes from "prop-types";
import { datosColegios } from "../data/data"
import { useEffect } from "react";
import Geocode from "react-geocode";

// GEOCODER 
Geocode.setApiKey(import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY);

const ColegioContext = createContext();

const ColegiosProvider = ({children}) => {

    // DECLARAR ACA FUNCIONES 
    {/* Recoleccion de los valores para los select desde los datos */}
    const  
        departamentos = [],
        niveles = [],
        idiomas = [];
    
    datosColegios.forEach(colegio => {
        if(!departamentos.includes(colegio.departamento) && colegio.departamento !== ""){
            departamentos.push(colegio.departamento);
        }
        colegio.idiomas.forEach(idioma =>{
            if(!idiomas.includes(idioma)){
                idiomas.push(idioma);
            }
        })
        colegio.nivel.forEach(nivel =>{
            if(!niveles.includes(nivel)){
                niveles.push(nivel);
            }
        })
    })

    {/* Ordenamiento de los valores de los select */}
    departamentos.sort((a, b) => {
        const numeroA = parseInt(a.match(/\d+/));
        const numeroB = parseInt(b.match(/\d+/));
        
        return numeroA - numeroB;
    });
    niveles.sort()
    idiomas.sort()

    {/* Funciones para el manejo de los select */}
    const defaultSelect = "";

    const [selectedDepartamento, setSelectedDepartamento] = useState(defaultSelect);
    const [selectedNivel, setSelectedNivel] = useState(defaultSelect);
    const [selectedIdioma, setSelectedIdioma] = useState(defaultSelect);

    {/* Filtrado de los colegios */}
    const datosColegiosFiltrados = datosColegios.filter(colegio => {
        return (
            (colegio.departamento === selectedDepartamento || selectedDepartamento === defaultSelect) && 
            (colegio.idiomas.includes(selectedIdioma) || selectedIdioma === defaultSelect) && 
            (colegio.nivel.includes(selectedNivel) || selectedNivel === defaultSelect) &&
            !(selectedNivel === defaultSelect && selectedIdioma === defaultSelect && selectedDepartamento === defaultSelect)
            )
    })

    // GEOCODER 
    useEffect(() => {
        datosColegiosFiltrados.forEach((colegio) => {
          Geocode.fromAddress(colegio.domicilio)
            .then((response) => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log('Latitud:', lat);
              console.log('Longitud:', lng);
            })
            .catch((error) => {
              console.error('Error al geocodificar la dirección:', error);
            });
        });
      }, [datosColegiosFiltrados]);

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
        setSelectedIdioma
    }}
    >
    {children}
    </ColegioContext.Provider>
)
}

ColegiosProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {ColegiosProvider}

export default ColegioContext
