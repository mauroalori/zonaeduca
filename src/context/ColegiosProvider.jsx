import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Colegios } from "../data/data";

// FIREBASE IMPORTS 
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { db } from "../firebase/firebase.config";
import { collection, getDocs, onSnapshot} from "firebase/firestore";

const ColegioContext = createContext();
const ColegiosProvider = ({ children }) => {
  // DECLARAR ACA FUNCIONES

  //ESTADOS FIREBASE
  const [verificacion, setVerificacion] = useState(true);
  //user lo utilizo para extraer el nombre desde la autenticacion de google.
  const [user, setUser] = useState("");
  //nombreUsuario cuando se registre de manera normal y extraigo el nombre.
  const [nombreUsuario, setNombreUsuario] = useState("")
  //estado con los comentarios.
  const [comentarios, setComentarios] = useState([]);

  // FUNCIONES DE REGISTER Y LOGUE DE FIREBASE 

  const register = async ( email, password, displayName) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName });
    console.log(response);
  }  

  const login = async (email, password) => {
    console.log("Estoy llegando a la función login");
    console.log("Antes de signInWithEmailAndPassword");
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    const displayName = auth.currentUser.displayName;
    console.log("Nombre del usuario:", displayName);
  };
  
  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return signInWithPopup(auth, responseGoogle)
  }

  const logout = async () => {
    const response = await signOut(auth)
    console.log(response);
  }

  // FUNCIONES FIREBASE DE COMENTARIOS

  const comentariosCollection = collection(db, "comentarios");

  const getComentarios = async () => {

    const data = await getDocs(comentariosCollection);
    setComentarios(
      data.docs.map((doc) => ({...doc.data(), id:doc.id}))
    )
  }

  // EFFECT PARA GUARDAR LOS NOMBRES DE LOS USUARIO LOGUEADOS 
  useEffect(() =>{
    const user = onAuthStateChanged(auth, (currentUser) => {
      if(!currentUser){
        console.log("No hay usuario suscrito")
        setUser("");
      }else{
        setUser(currentUser);
        setNombreUsuario(currentUser.displayName);
        console.log("Nombre del usuario:", nombreUsuario);
      }
    })
    return () =>  user();
  },[])

  // EFFECT PARA ACTUALIZAR LOS COMENTARIOS AGREGADOS 
  useEffect(() => {
    const unsubscribe = onSnapshot(comentariosCollection, () => {
      getComentarios();
    });

    return () => unsubscribe();
  }, []);
  
  /* Recoleccion de los valores para los select desde los datos */

  const rutaAPIColegios = 'https://apicolegioszonaeduca.up.railway.app/colegios'
  const [datosColegios, setDatosColegios] = useState ([]);
  
  {/* CONSUMO DE NUESTRA API */}
  useEffect (() => {
    // función asíncrona para hacer el fetch
    (async function() {
      try {
        const respuesta = await fetch (rutaAPIColegios);
        const datosColegios = await respuesta.json ();
        setDatosColegios (datosColegios);
      } catch (error) {
        console.error ('Error al obtener los datos de los colegios:', error);
        setDatosColegios (Colegios);
      }
    }());
  }, []);

  const 
    departamentos = [],
    niveles = [],
    idiomas = [];

  datosColegios.forEach((colegio) => {
    if (
      !departamentos.includes(colegio.departamento) &&
      colegio.departamento !== ""
    ) {
      departamentos.push(colegio.departamento);
    }
    colegio.idiomas.forEach((idioma) => {
      if (!idiomas.includes(idioma)) {
        idiomas.push(idioma);
      }
    });
    colegio.nivel.forEach((nivel) => {
      if (!niveles.includes(nivel)) {
        niveles.push(nivel);
      }
    });
  });

  {
    /* Ordenamiento de los valores de los select */
  }
  departamentos.sort((a, b) => {
    const numeroA = parseInt(a.match(/\d+/));
    const numeroB = parseInt(b.match(/\d+/));

    return numeroA - numeroB;
  });
  niveles.sort();
  idiomas.sort();

  {
    /* Funciones para el manejo de los select */
  }
  const defaultSelect = "";

  const [selectedDepartamento, setSelectedDepartamento] =
    useState(defaultSelect);
  const [selectedNivel, setSelectedNivel] = useState(defaultSelect);
  const [selectedIdioma, setSelectedIdioma] = useState(defaultSelect);

  {
    /* Filtrado de los colegios */
  }
  const datosColegiosFiltrados = datosColegios.filter((colegio) => {
    return (
      (colegio.departamento === selectedDepartamento ||
        selectedDepartamento === defaultSelect) &&
      (colegio.idiomas.includes(selectedIdioma) ||
        selectedIdioma === defaultSelect) &&
      (colegio.nivel.includes(selectedNivel) ||
        selectedNivel === defaultSelect) &&
      !(
        selectedNivel === defaultSelect &&
        selectedIdioma === defaultSelect &&
        selectedDepartamento === defaultSelect
      )
    );
  });

  // Colegios Recomendados aleatorios
  const colegiosRecomendados = datosColegios.sort(() => Math.random() - 0.5).slice(0, 10);
    
      return (
    <ColegioContext.Provider
      value={{
        datosColegios,
        departamentos,
        niveles,
        idiomas,
        datosColegiosFiltrados,
        colegiosRecomendados,
        setSelectedDepartamento,
        setSelectedNivel,
        setSelectedIdioma,
        register,
        login,
        loginWithGoogle,
        logout,
        auth,
        setVerificacion,
        verificacion,
        user,
        nombreUsuario,
        comentarios
      }}
    >
      {children}
    </ColegioContext.Provider>
  );
};

ColegiosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ColegiosProvider };

export default ColegioContext;
