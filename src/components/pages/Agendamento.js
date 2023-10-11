import React from 'react';
import './Agendamento.css';

export default function Agendamento() {
  return (
  <div className='DivAgendamento'>
    <h1 className='Agendamento'>Agendamento</h1>
    <br/><br/><br/>
    <div className='DivAgendamento2'>
      <div className='ImgAgendamento'></div>
      <div className='TextoAgendamento'>

      <p>Se cuidar, é mais do sua aparência,<br/> é uma elemento essencial para sua autoestima.<br/>
         Se cuidar é uma saiba decissão para<br/> que você continue a desfrutar dos momentos <br/>especiais que o autocuidado proporciona.<br/>
          Não espere pelo inesperado, garanta o<br/> seu horário hoje mesmo com o<br/> nosso serviço de agendamento<br/>
        Se cuide com confiança, se cuide protegida.</p>
        
        <button>
          <a href="/CriarConta" className="botao-link">Agende seu atendimento</a>
        </button>
      </div>
    </div>
  </div>
  
  );
}