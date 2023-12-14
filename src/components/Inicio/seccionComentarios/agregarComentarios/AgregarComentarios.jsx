import UseColegio from "../../../../hooks/UseColegio";
import { db } from "../../../../firebase/firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement('#root');

function AgregarComentarios() {

  const { verificacion } = UseColegio();

  const [descripcion, setDescripcion] = useState("");

  const comentariosCollection = collection(db, "comentarios");

  const store = async (e) => {
    e.preventDefault();
    closeModal();
    await addDoc(comentariosCollection, { descripcion: descripcion });
    alert("comentario agregado");
    setDescripcion("");
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center mb-14">
      <h2 className="text-center text-xl text-[#00405B] mb-2">
        ¡Dejanos tu comentario!
      </h2>
      {verificacion ? (
        <div>
          <h1 className="text-center">LOGUEATE PARA DEJAR UN COMENTARIO</h1>
        </div>
      ) : (
        <div className="relative">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={openModal}
          >
            AGREGAR COMENTARIO
          </button>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Ejemplo de Modal"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg"
            overlayClassName="fixed inset-0 backdrop-filter backdrop-blur-sm z-10"
          >

            <h2 className="text-xl font-bold mb-4">Envianos tu comentario</h2>
            <form
            id="form-comentario"
            className="flex flex-col gap-5 items-center"
            onSubmit={store}
            >
              <textarea
                name="comentario"
                cols="40"
                rows="7"
                placeholder="Escribe tu comentario aqui"
                className="w-full border-brown-300"
                required
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                style={{ resize: 'none', border: '1px solid #ccc' , borderRadius: '4px'}}
                onFocus={(e) => e.target.style.outline = 'none'}
              ></textarea>
              <button
                type="submit"
                className="m-auto bg-[#3DCCFF] text-white w-20 p-1 rounded-md hover:bg-[#1e8eb7] duration-200 cursor-pointer"
              >
                ENVIAR
              </button>
            </form>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default AgregarComentarios;
