import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-information'>
      
        <div className="footer-column">
        <a href="#">Telefone: 2598-7415</a>
        </div>

        <div className="footer-column">
        <a href="#">Email: selfc@hotmail.com</a>
        </div>
        </div>
        
        <div className="footer-logos">
          <a href="/Selfc"><img src='/images/Logo.png' alt='Logo SelfC.'/></a> 

        </div>
    </div>
  );
}

export default Footer;

//Os nomes e RMs estão ao clicar na logo do rodapé.
