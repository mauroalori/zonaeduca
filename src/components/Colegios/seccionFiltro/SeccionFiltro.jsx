import "./filtro.css"
function SeccionFiltro(){
    return (
        <>
        <div className="contenedor">
            <p className="text">Encuentre su colegio</p>
        <form action="">
            <div class="conForm">
                <div class="input-Fil">
                    <label for="Departamento">Departamento</label>
                    <input type="text" placeholder="Departamento" class="Departamento" />
                </div>
                <div class="input-Fil" >
                    <label for="Nivel">Nivel</label>
                    <input type="text" placeholder="Nivel" class="Nivel"/>
                </div>
                <div class="input-Fil">
                    <label for="Idioma">Idioma</label>
                    <input type="text" placeholder="Idioma" class="Idioma"/>
                </div>
                <div class="input-Fil">
                    <button>Buscar</button>
                </div>
            </div>
        </form>
        </div>
        </>
    );
}

export default SeccionFiltro;