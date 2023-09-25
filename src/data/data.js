import foto1 from "../assets/fotosComentarios/Foto1.jpg"
import foto2 from "../assets/fotosComentarios/Foto2.jpg"
import foto3 from "../assets/fotosComentarios/Foto3.jpg"
import foto4 from "../assets/fotosComentarios/Foto4.jpg"
import foto5 from "../assets/fotosComentarios/Foto5.jpg"
import foto6 from "../assets/fotosComentarios/Foto6.jpg"
import fotoColegio from "../assets/fotosColegios/tecnica1joseingenieros.jpg"
const
    path = "../assets/fotosColegios/",
    extension = ".jpg";

const datosComentarios = [
    {
        id: 1,
        imagen: foto1,
        texto: "¡Este sitio web es increíble! Me ha ayudado a encontrar el colegio perfecto para mis hijos cerca de casa. Ahora tengo la tranquilidad de saber que están en buenas manos."
    },
    {
        id: 2,
        imagen: foto2,
        texto: "No puedo creer lo fácil que fue usar esta plataforma para encontrar el colegio ideal para mis hijos. ¡Gracias por hacer mi vida mucho más sencilla!"
    },
    {
        id: 3,
        imagen: foto3,
        texto: "Como padre, siempre es un desafío encontrar el mejor colegio para mis hijos. Este sitio web me ha ahorrado tiempo y esfuerzo al brindarme opciones cercanas y de calidad."
    },
    {
        id: 4,
        imagen: foto4,
        texto: "Recomendaría este sitio web a cualquier padre que esté buscando un colegio cercano para sus hijos. La información detallada y las opiniones de otros padres son muy útiles."
    },
    {
        id: 5,
        imagen: foto5,
        texto: "No tenía idea de por dónde empezar al buscar colegios para mis hijos. Gracias a este sitio web, pude comparar opciones y tomar una decisión informada. ¡Excelente herramienta!"
    },
    {
        id: 6,
        imagen: foto6,
        texto: "Encontrar el colegio adecuado puede ser abrumador, pero este sitio web lo hace simple. Estoy contento de haber encontrado una solución que simplifica este proceso importante."
    }
]

const datosColegios = [
    {
        id: 1,
        nombre: "Tecnica N°1 Jose Ingenieros",
        imagen: fotoColegio,
        informacion: "Se inició como Escuela Argentina de Educación Profesional, siendo oficializada por Orden Ministerial del Gobierno Provincial con fecha el 1 de enero de 1945 y funcionaba en Ingeniero Huergo 1051. Con el tiempo paso a ser Escuela Profesional y de oficios Mixta N°1. En la década de 1950 se traslada a I. Huergo 1534, compartiendo edificio con la Escuela Primaria N°33. Su nombre vuelve a cambiar Escuela Profesional Mixta N° 1 de Avellaneda."
    },
    {
        id: 2,
        nombre: "Tecnica N°1 Jose Ingenieros",
        imagen: fotoColegio,
        informacion: "Se inició como Escuela Argentina de Educación Profesional, siendo oficializada por Orden Ministerial del Gobierno Provincial con fecha el 1 de enero de 1945 y funcionaba en Ingeniero Huergo 1051. Con el tiempo paso a ser Escuela Profesional y de oficios Mixta N°1. En la década de 1950 se traslada a I. Huergo 1534, compartiendo edificio con la Escuela Primaria N°33. Su nombre vuelve a cambiar Escuela Profesional Mixta N° 1 de Avellaneda."
    },
    {
        id: 3,
        nombre: "Tecnica N°1 Jose Ingenieros",
        imagen: fotoColegio,
        informacion: "Se inició como Escuela Argentina de Educación Profesional, siendo oficializada por Orden Ministerial del Gobierno Provincial con fecha el 1 de enero de 1945 y funcionaba en Ingeniero Huergo 1051. Con el tiempo paso a ser Escuela Profesional y de oficios Mixta N°1. En la década de 1950 se traslada a I. Huergo 1534, compartiendo edificio con la Escuela Primaria N°33. Su nombre vuelve a cambiar Escuela Profesional Mixta N° 1 de Avellaneda."
    },
    {
        id: 4,
        nombre: "Tecnica N°1 Jose Ingenieros",
        imagen: fotoColegio,
        informacion: "Se inició como Escuela Argentina de Educación Profesional, siendo oficializada por Orden Ministerial del Gobierno Provincial con fecha el 1 de enero de 1945 y funcionaba en Ingeniero Huergo 1051. Con el tiempo paso a ser Escuela Profesional y de oficios Mixta N°1. En la década de 1950 se traslada a I. Huergo 1534, compartiendo edificio con la Escuela Primaria N°33. Su nombre vuelve a cambiar Escuela Profesional Mixta N° 1 de Avellaneda."
    },
    {
        id: 5,
        nombre: "Tecnica N°1 Jose Ingenieros",
        imagen: fotoColegio,
        informacion: "Se inició como Escuela Argentina de Educación Profesional, siendo oficializada por Orden Ministerial del Gobierno Provincial con fecha el 1 de enero de 1945 y funcionaba en Ingeniero Huergo 1051. Con el tiempo paso a ser Escuela Profesional y de oficios Mixta N°1. En la década de 1950 se traslada a I. Huergo 1534, compartiendo edificio con la Escuela Primaria N°33. Su nombre vuelve a cambiar Escuela Profesional Mixta N° 1 de Avellaneda."
        
    },
    {
        id: 6,
        nombre: "Tecnica N°1 Jose Ingenieros",
        imagen: fotoColegio,
        informacion: "Se inició como Escuela Argentina de Educación Profesional, siendo oficializada por Orden Ministerial del Gobierno Provincial con fecha el 1 de enero de 1945 y funcionaba en Ingeniero Huergo 1051. Con el tiempo paso a ser Escuela Profesional y de oficios Mixta N°1. En la década de 1950 se traslada a I. Huergo 1534, compartiendo edificio con la Escuela Primaria N°33. Su nombre vuelve a cambiar Escuela Profesional Mixta N° 1 de Avellaneda."
    },
    {
        id: 51,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 52,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 53,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 54,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 55,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 56,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 57,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 58,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 59,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 60,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 61,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 62,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 63,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 64,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 65,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 66,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 67,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 68,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 69,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 70,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 71,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 72,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 73,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 74,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    },
    {
        id: 75,
        nombre: "St. Catherine’s Moorlands School",
        imagen: path + "santacatalina" + extension,
        informacion: "St. Catherine’s Moorlands School, también conocido como Santa Catalina de Belgrano, es un colegio fundado en 1956, de gestión privada, mixto, de jornada completa y con orientación en valores de la religión Católica. Se dicta una enseñanza plurilingüe (Inglés, Francés, Mandarín), con carácter bilingüe, con la posibilidad de aplicar a certificaciones internacionales. Además, los alumnos tienen la posibilidad de obtener el Bachillerato Internacional (IB)."
    }
]

export{datosComentarios, datosColegios}
/*
const datosColegios = [
    {
        id: 1,
        nombre: "",
        imagen: "",
        informacion: "",
        telefono: 12345678,
        correoElectronico: "",
        direccion: "",
        departamento: "",
        tipo: "",
        niveles: [],
        caracteristicas: {
            infraestructura: [],
            idiomas: []
        }
    }
]*/