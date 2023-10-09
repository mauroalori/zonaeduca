import { createContext } from "react"
import PropTypes from "prop-types";
import { datosColegios } from "../data/data"

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

  return (
    <ColegioContext.Provider
    value={{
      datosColegios,
      departamentos,
      niveles,
      idiomas
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
