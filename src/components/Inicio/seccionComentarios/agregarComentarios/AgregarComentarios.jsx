import UseColegio from "../../../../hooks/UseColegio";
import { db } from "../../../../firebase/firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

function AgregarComentarios() {

  const { verificacion } = UseColegio();

  const [descripcion, setDescripcion] = useState("");

  const comentariosCollection = collection(db, "comentarios");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(comentariosCollection, { descripcion: descripcion });
    alert("comentario agregado");
    setDescripcion("");
  };

  return (
    <div className="flex flex-col items-center pb-14">
      <h2 className="text-center text-xl text-[#00405B] mb-10">
        ¡Dejanos tu comentario!
      </h2>
      {verificacion ? (
        <div>
          <h1 className="text-center">LOGUEATE PARA DEJAR UN COMENTARIO</h1>
        </div>
      ) : (
        <div>
          <form
            id="form-comentario"
            className="flex flex-col gap-5 items-center"
            onSubmit={store}
          >
            <textarea
              name="comentario"
              cols="20"
              rows="10"
              placeholder="Escribe tu comentario"
              className="w-full border-brown-300"
              required
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className="m-auto bg-[#3DCCFF] text-white w-20 p-1 rounded-md hover:bg-[#1e8eb7] duration-200 cursor-pointer"
            >
              ENVIAR
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AgregarComentarios;
