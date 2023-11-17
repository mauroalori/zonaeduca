import { Swiper, SwiperSlide } from 'swiper/react';

// STYLES 
import 'swiper/css';
import 'swiper/css/pagination';
import './SeccionRecomendaciones.css'

// MODULOS 
import { Pagination } from 'swiper/modules';
import UseColegio from '../../../hooks/UseColegio';
function SeccionRecomendaciones() {
  const { colegiosRecomendados } = UseColegio()

  return (
    <>
        <h3 className='text-white text-2xl bg-[#00405B] p-3 pl-12'>Nuestras recomendaciones</h3>
        <div className='flex-col justify-center bg-[#001A29] p-4'>
          <div className='carrousel p-10'>
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
              {colegiosRecomendados.map((escuela) => (
                  <SwiperSlide
                  // le paso el id de cada card 
                  key={escuela.id}
                  className='flex justify-center items-center '
                  >
                      {/* DISEÑO LA CARD  */}
                      <div  className='bg-white shadow-md shadow-gray-600 h-96 rounded-xl m-2 p-4 md:w-64 w-72 flex flex-col justify-evenly items-center'>
                        <img src={escuela.imagen} alt="foto de una escuela" className='h-1/3 object-cover rounded-xl'  />
                        <h3 className='text-center text-[#00405B]'>{escuela.nombre}</h3>
                        <div className='h-1/3 overflow-hidden px-1 relative'>
                        <div className='text-disappear w-16 h-4 absolute z-1 bottom-0 right-0'>...</div>
                          <p className='text-left text-[#00405B] text-sm'>{escuela.descripcion}</p>
                        </div>
                      </div>

                  </SwiperSlide>

              ))}

            </Swiper>
            </div>
        </div>
    </>
  )
}

export default SeccionRecomendaciones