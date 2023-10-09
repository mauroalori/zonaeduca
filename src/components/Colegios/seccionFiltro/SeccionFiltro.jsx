import "./filtro.css"
import UseColegio from "../../../hooks/UseColegio";
function SeccionFiltro(){
    const {departamentos, niveles, idiomas} = UseColegio();

    return (
        <>
        <div className="contenedor-filtro">
            <p className="text">Encuentre su colegio</p>
        <form action="">
            <div className="conForm">
                <div className="input-Fil">
                    <label for="Departamento">Departamento</label>
                    <select name="departamentos" id="select-departamentos" className="Departamento">
                        <option value="">Seleccione</option>
                        {departamentos.map(departamento => (
                            <option value={departamento}>{departamento}</option>
                        ))}
                    </select>
                </div>
                <div className="input-Fil" >
                    <label for="Nivel">Nivel</label>
                    <select name="niveles" id="select-niveles" className="Nivel">
                        <option value="">Seleccione</option> 
                        {niveles.map(nivel => (
                            <option value={nivel}>{nivel}</option>
                        ))}
                    </select>
                </div>
                <div className="input-Fil">
                    <label for="Idioma">Idioma</label>
                    <select name="idiomas" id="select-idiomas" className="Idioma">
                        <option value="">Seleccione</option>
                        {idiomas.map(idioma => (
                            <option value={idioma}>{idioma}</option>
                        ))}
                    </select>
                </div>
                <div className="input-Fil">
                    <button>Buscar</button>
                </div>
            </div>
        </form>
        </div>
        </>
    );
}

export default SeccionFiltro;