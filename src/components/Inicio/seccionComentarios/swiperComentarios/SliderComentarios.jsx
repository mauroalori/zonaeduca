import { Swiper, SwiperSlide } from "swiper/react";
import {useState, useEffect} from "react"

// IMPORTO EL OBJETO DESDE DATA PARA RECORRERLO
import UseColegio from "../../../../hooks/UseColegio";
import { FaUserCircle } from "react-icons/fa";

// STYLES
import "swiper/css";
import "swiper/css/pagination";
import "./sliderComentarios.css";

// MODULOS
import { Pagination } from "swiper/modules";

function SliderComentarios() {
  const { comentarios } = UseColegio();


  return (
    <>
      <div className="h-96 m-10 mb-4">
        <Swiper
          // PROPIEDADES DEL SWIPER
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {/* MAPEO LOS DATOS DENTRO DEL SWIPER PARA QUE ME CREE LAS CARDS  */}
          {comentarios.map((dato) => (
            <SwiperSlide
              // le paso el id de cada card
              key={dato.id}
              className="flex justify-center items-center "
            >
              {/* DISEÑO LA CARD  */}
              <div className="bg-[#001A29] h-80 rounded-xl m-2 md:w-64 w-72 flex flex-col justify-evenly items-center">
                <FaUserCircle className='w-20 h-20 text-white'  />

                <p className="text-left text-white text-sm w-52 m-2">
                  {dato.descripcion}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SliderComentarios;
