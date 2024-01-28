import { AccordionCustomIcon } from "../components/PreguntasAyuda/AccordionCustomIcon";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { GoQuestion } from "react-icons/go";

function Ayuda() {
  window.scrollTo(0, 0);

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-start m-20 mb-5 gap-5">
        <h1 className=" text-3xl font-semibold uppercase">
          Preguntas frecuentes
        </h1>
        <GoQuestion className="text-4xl" />
      </div>

      <div className="m-16 mt-5">
        <AccordionCustomIcon />
      </div>

      <Footer />
    </>
  );
}

export default Ayuda;
