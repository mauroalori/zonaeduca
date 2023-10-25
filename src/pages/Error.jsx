import { Link } from "react-router-dom"

function Error() {
  return (
    <>
      <div className="m-auto mt-52">
        <h1 className="text-center font-semibold text-4xl text-red-500">ERROR DE RUTA, VUELVA A LA PAGINA :C</h1>

        <Link to={"/"}>
        <p className="text-center m-auto mt-10 p-2 text-white rounded-lg w-56 bg-[#00729A] hover:bg-[#175a72] duration-200 ">
        VOLVER AL INICIO
        </p>
        </Link>
      </div>
    </>
  )
}

export default Error
