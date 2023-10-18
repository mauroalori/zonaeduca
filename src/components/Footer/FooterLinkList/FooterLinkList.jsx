import React from 'react'
import './FooterLinkList.css';
function FooterLinkList({title,links,a=false}) {

    const linkList=links.map((link, index) => {
        if(!a){
            return (<li key={index}>{link}</li>);
        }
        else{
            return (<li key={index}><a href={`https://www.${link.toLowerCase()}.com/`}>{link}</a></li>);
        }
    });

  return (
    <>
        <ul className='lista-enlace'>
            <li className='font-bold text-white'>{title}</li>
            {linkList}
        </ul>
    </>
  );
}

export default FooterLinkList