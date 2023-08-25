import React from 'react'
import logo from './../../assets/logo.png'

function Navbar() {
  return (
    <>
      <nav className='bg-[#001A29] text-white flex justify-between items-center h-11'>
        <img src={logo} alt="" className='ml-4 h-6'/>
        <ul className='flex gap-10'>
          <li className=''>Inicio</li>
          <li className=''>Colegios</li>
          <li className=''>Contacto</li>
          <li className=''>Ayuda</li>
        </ul>
        <ul className='flex gap-5 mr-4'>
          <li>Registrarse</li>
          <li>Ingresar</li>
        </ul>
      </nav>
      
    </>
  )
}

export default Navbar