import { createContext } from "react"
import PropTypes from "prop-types";

const ColegioContext = createContext();

const ColegiosProvider = ({children}) => {

    // DECLARAR ACA FUNCIONES 
    function saludo(){
      alert("buenas buenas")
    }


  return (
    <ColegioContext.Provider
    value={{
        saludo
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
