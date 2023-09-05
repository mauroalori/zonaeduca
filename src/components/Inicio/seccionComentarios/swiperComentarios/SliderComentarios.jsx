import { Swiper, SwiperSlide } from 'swiper/react';

// IMPORTO EL OBJETO DESDE DATA PARA RECORRERLO 
import { datosComentarios } from '../../../../data/data';

// STYLES 
import 'swiper/css';
import 'swiper/css/pagination';
import "./sliderComentarios.css"

// MODULOS 
import { Pagination } from 'swiper/modules';

function SliderComentarios() {
  return (
    <>
    <div className='h-96 m-10'>

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
        {datosComentarios.map((dato) => (
            <SwiperSlide
            // le paso el id de cada card 
            key={dato.id}
            className='flex justify-center items-center'
            >
                {/* DISEÑO LA CARD  */}
                <div className='bg-[#001A29] h-80 rounded-xl m-2 md:w-64 w-72 flex flex-col justify-evenly items-center'>
                <img src={dato.imagen} alt="fotos" className='w-20 h-20 rounded-[100%]'  />

                <p className='text-left text-white text-sm w-52 m-2'>{dato.texto}</p>
                </div>

            </SwiperSlide>

        ))}

      </Swiper>
        
    </div>

    </>
  )
}

export default SliderComentarios
