import { createContext } from "react"
import PropTypes from "prop-types";
import { datosColegios } from "../data/data"

const ColegioContext = createContext();

const ColegiosProvider = ({children}) => {

    // DECLARAR ACA FUNCIONES 

  return (
    <ColegioContext.Provider
    value={{
      datosColegios
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
