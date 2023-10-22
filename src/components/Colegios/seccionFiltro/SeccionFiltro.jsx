import "./filtro.css";
import UseColegio from "../../../hooks/UseColegio";
import { useState } from "react"; 


function SeccionFiltro() {
  const {
    departamentos, niveles, idiomas,
    setSelectedDepartamento, setSelectedNivel, setSelectedIdioma
  } = UseColegio();

  // ESTADOS 
  const [selectedValues, setSelectedValues] = useState({
    departamento: "",
    nivel: "",
    idioma: ""
  });
  const [open, setOpen] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedValues({
      ...selectedValues,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSearch = (e) => {
    e.preventDefault();


    if (
      selectedValues.departamento ||
      selectedValues.nivel ||
      selectedValues.idioma
    ) {
      setOpen(false)
      setSelectedDepartamento(selectedValues.departamento);
      setSelectedNivel(selectedValues.nivel);
      setSelectedIdioma(selectedValues.idioma);
    } else {
      setOpen(true)
    }
  };

  return (
    <>
      <div className="contenedor-filtro">
        <p className="text">Encuentre su colegio</p>
        <form action="">
          <div className="conForm">
            <div className="input-Fil">
              <label htmlFor="Departamento">Departamento</label>
              <select
                name="departamento"
                id="select-departamentos"
                className="Departamento"
                onChange={handleSelectChange}
               
              >
                <option value="" >Seleccione</option>
                {departamentos.map((departamento) => (
                  <option key={departamento} value={departamento}>
                    {departamento}
                  </option>
                ))}
              </select>
              {open ? <p className="text-red-500 w-30 "> seleccione al menos un campo </p> : <p className="w-30">  </p>}
            </div>
            <div className="input-Fil">
              <label htmlFor="Nivel" >Nivel</label>
              <select
                name="nivel"
                id="select-niveles"
                className="Nivel"
                onChange={handleSelectChange}
              >
                <option value="">Seleccione</option>
                {niveles.map((nivel) => (
                  <option key={nivel} value={nivel}>
                    {nivel}
                  </option>
                ))}
                            
              </select>

            </div>
            <div className="input-Fil">
              <label htmlFor="Idioma">Idioma</label>
              <select
                name="idioma"
                id="select-idiomas"
                className="Idioma"
                onChange={handleSelectChange}
            
              >
                <option value="">Seleccione</option>
                {idiomas.map((idioma) => (
                  <option key={idioma} value={idioma}>
                    {idioma}
                  </option>
                ))}
              </select>
       
            </div>
            <div className="input-Fil">
              <button type="submit" onClick={handleSearch}>
                Buscar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SeccionFiltro;
