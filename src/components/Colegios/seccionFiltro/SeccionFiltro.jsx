import "./filtro.css"
import UseColegio from "../../../hooks/UseColegio";
function SeccionFiltro(){
    const {datosColegios} = UseColegio();

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
        <>
        <div className="contenedor-filtro">
            <p className="text">Encuentre su colegio</p>
        <form action="">
            <div className="conForm">
                <div className="input-Fil">
                    <label for="Departamento">Departamento</label>
                    <select name="departamentos" id="select-departamentos" className="Departamento">
                        {departamentos.map(departamento => (
                            <option value={departamento}>{departamento}</option>
                        ))}
                    </select>
                </div>
                <div className="input-Fil" >
                    <label for="Nivel">Nivel</label>
                    <select name="niveles" id="select-niveles" className="Nivel">
                        {niveles.map(nivel => (
                            <option value={nivel}>{nivel}</option>
                        ))}
                    </select>
                </div>
                <div className="input-Fil">
                    <label for="Idioma">Idioma</label>
                    <select name="idiomas" id="select-idiomas" className="Idioma">
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