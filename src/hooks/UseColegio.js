import { useContext } from "react";
import ColegioContext from "../context/ColegiosProvider";

const UseColegio = () => {
    return useContext(ColegioContext)
}

export default UseColegio;