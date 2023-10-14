import { datosColegios } from "../../data/data";
import flecha from "../../assets/gifs-iconos/flecha.png";
import './SeccionColegio.css';

function SeccionColegio() {
    const colegio = datosColegios[54];
    return (
        <>
            <div className="colegio-descrip">
                <div className="dato-colegio">
                    <img src={flecha} alt="" className="icon-flecha" />
                    <h1 className="nombre-colegio">{colegio.nombre}</h1>
                </div>
                <div className="niveles">
                    <ul >
                        {colegio.nivel.map((nivel, index) => (
                            <li key={index} className="nivel">{nivel}</li>
                        ))}
                    </ul>
                </div>
                <div className="descripcion">
                    <div className="descrip-imagen">
                        <img src={colegio.imagen} alt="" className="img-cole" />
                    </div>
                    <div className="descrip-cole">
                        <p className="descripcion-cole">{colegio.descripcion}</p>
                    </div>
                </div>
                <div>
                    <h2 className="contacto-cole">Contacto</h2>
                </div>
                <div>
                    <h2 className="contacto-cole">Caracteristicas</h2>
                </div>
                <div>
                    <h2 className="contacto-cole">Infraestructura</h2>
                </div>
                <div>
                    <h2 className="contacto-cole">Idiomas & Certificaciones</h2>
                </div>
            </div>

        </>
    )
}
export default SeccionColegio