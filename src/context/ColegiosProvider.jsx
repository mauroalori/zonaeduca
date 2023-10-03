import { createContext } from "react"
import PropTypes from "prop-types";

const ColegioContext = createContext();

const ColegiosProvider = ({children}) => {

    // DECLARAR ACA FUNCIONES 

  return (
    <ColegioContext.Provider
    value={{
        
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
