import logo from './../../assets/logo.png'
import './Footer.css';
import FooterLinkList from './FooterLinkList/FooterLinkList';
function Footer() {

  return (
    <>
    <div className='footer flex flex-wrap gap-8 bg-[#001A29] px-10 py-5'>
        <div className='w-full md:w-1/3'>
            <img src={logo} alt="logo de zonaeduca" className='max-w-[250px] w-1/2 md:w-full text-left'/>
        </div>
        <div className='inline-block w-full md:w-2/3'>
            {/* Lista de contacto */}
            <FooterLinkList title={"Contacto"} links={["zonaeduca@gmail.com","11-1234-5678"]}/>
            {/* Lista de redes sociales */}
            <FooterLinkList title={"Redes sociales"} links={["Instagram","Facebook","Twitter"]} a={true}/>
        </div>
        <p className='text-white text-center font-bold w-full m-auto mt-12'>©2023 ZonaEduca. Conocé los términos de uso y nuestra política de privacidad.</p>
    </div>
    </>
  );
}

export default Footer;
