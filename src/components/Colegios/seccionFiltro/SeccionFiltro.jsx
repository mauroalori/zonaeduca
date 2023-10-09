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
                    <input type="text" placeholder="Departamento" className="Departamento" />
                </div>
                <div className="input-Fil" >
                    <label for="Nivel">Nivel</label>
                    <input type="text" placeholder="Nivel" className="Nivel"/>
                </div>
                <div className="input-Fil">
                    <label for="Idioma">Idioma</label>
                    <input type="text" placeholder="Idioma" className="Idioma"/>
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