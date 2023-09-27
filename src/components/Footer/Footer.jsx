import logo from './../../assets/logo.png'
import './Footer.css';
import FooterLinkList from './FooterLinkList/FooterLinkList';
function Footer() {

  return (
    <>
    <div className='bg-[#001A29] w-full h-500 pb-6'>
        <div className='footer'>
            <div className='w-full md:w-1/3 flex items-center justify-center'>
                <img src={logo} alt="logo de zonaeduca" className='logoFooter max-w-[250px] w-1/2 mx-auto mt-4'/>
            </div>
            <div className='enlaces flex flex-wrap gap-y-6'>
                {/* Lista de contacto */}
                <FooterLinkList title={"Contacto"} links={["zonaeduca@gmail.com","11-1234-5678"]}/>
                {/* Lista de redes sociales */}
                <FooterLinkList title={"Redes sociales"} links={["Instagram","Facebook","Twitter"]} a={true}/>
            </div>
        </div>
        <p className='copyright text-white text-center font-bold w-full m-auto mt-12 '>©2023 ZonaEduca. Conocé los términos de uso y nuestra política de privacidad.</p>
      </div>
    </>
  );
}

export default Footer;
