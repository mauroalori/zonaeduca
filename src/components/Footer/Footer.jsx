import logo from './../../assets/logo.png'
import './Footer.css';

function Footer() {

  return (
    <>
    <div className='footer flex flex-wrap gap-8 bg-[#001A29] px-10 py-5'>
        <div className='w-full md:w-1/3'>
            <img src={logo} alt="logo de zonaeduca" className='max-w-[250px] w-1/2 md:w-full text-left'/>
        </div>
        <div className='inline-block w-full md:w-2/3'>
            <ul className='flex flex-col gap-6 w-1/2 text-slate-400'>
                <li className='font-bold text-white'>Contacto</li>
                <li>zonaeduca@gmail.com</li>
                <li>11-1234-5678</li>
            </ul>
            <ul className='flex flex-col gap-6 w-1/2 text-slate-400'>
                <li className='font-bold text-white'>Redes sociales</li>
                <li><a href="https://www.instagram.com/" target='blank'>Instagram</a></li>
                <li><a href="https://www.facebook.com/" target='blank'>Facebook</a></li>
                <li><a href="https://twitter.com/" target='blank'>Twitter</a></li>
            </ul>
        </div>
        <p className='text-white text-center font-bold w-full m-auto mt-12'>©2023 ZonaEduca. Conocé los términos de uso y nuestra política de privacidad.</p>
    </div>
    </>
  );
}

export default Footer;
