import React from 'react'

function FooterLinkList({title,links,a=false}) {

    console.log(a)

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
        <ul className='flex flex-col gap-6 w-1/2 text-slate-400'>
            <li className='font-bold text-white'>{title}</li>
            {linkList}
        </ul>
    </>
  );
}

export default FooterLinkList