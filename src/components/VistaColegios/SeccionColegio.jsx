import { datosColegios } from "../../data/data";
import flecha from "../../assets/gifs-iconos/flecha.png";
import circulo from "../../assets/gifs-iconos/circulo.png";
import caracteristica from "../../assets/gifs-iconos/caracteristica.png";
import './SeccionColegio.css';

function SeccionColegio(idColegio) {
    // const colegio = datosColegios[idColegio];
    const colegio = datosColegios[52];
    // if (!colegio) {
    //     return <div>El colegio seleccionado no existe.</div>;
    // }
    return (
        <>
            <div className="dato-colegio">
                <div className="nom-colegio">
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
                <div className="descripcion-colegio">
                    <div className="descrip-imagen">
                        <img src={colegio.imagen} alt="" className="img-cole" />
                    </div>
                    <div className="descrip-cole">
                        <p>{colegio.descripcion}</p>
                    </div>
                </div>
                <div className="contacto">
                    <div>
                        <h2 className="item-cole">Contacto</h2>
                    </div>
                    <div>
                        <ul className="contact-info">
                            <li>
                                <img src={circulo} alt="IconoCirculo" className="icon-circulo" />
                                <p><strong>Tel:</strong> {colegio.telefono}</p>
                            </li>
                            <li>
                                <img src={circulo} alt="IconoCirculo" className="icon-circulo" />
                                <p><strong>Mail:</strong> {colegio.mail}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="caracter-cole">
                    <img src={caracteristica} alt="" className="icon-caracter" />
                    <h2 className="item2-cole">Caracteristicas</h2>
                </div>
                <div >
                    <h2 className="item-cole">Infraestructura</h2>
                    <ul className="caracteristica">
                        {colegio.caracteristicas.map((caracteristicas, index) => (
                            <li key={index}>
                                <img src={circulo} alt="IconoCirculo" className="icon-circulo" />
                                {caracteristicas}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="idiomas">
                    <h2 className="item-cole">Idiomas & Certificaciones</h2>
                    <ul className="idiomas-list">
                        {colegio.idiomas.map((idioma, index) => (
                            <li key={index} className="idiomas-item">
                                <img src={circulo} alt="IconoCirculo" className="icon-circulo" />
                                {idioma}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </>
    )
}
export default SeccionColegio