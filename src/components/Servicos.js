import React from 'react';
import '../App.css';
import './Banner.css';
import './card.css';
import LinhaCabelo from './LinhaCabelo';
import LinhaMassagem from './LinhaMassa';
import LinhaSobra from './LinhaSobra';
import LinhaUnha from './LinhaUnha';

function Servicos({ servico }) {
  const cabeloServicos = servico
    .filter((servico) => servico.tipo === "cabelo")
    .sort((a, b) => a.nome.localeCompare(b.nome));
  const unha = servico
    .filter((servico) => servico.tipo === "unha")
    .sort((a, b) => a.nome.localeCompare(b.nome));
  const sombrancelha = servico
    .filter((servico) => servico.tipo === "sombrancelhas")
    .sort((a, b) => a.nome.localeCompare(b.nome));
  const massagem = servico
    .filter((servico) => servico.tipo === "massagem")
    .sort((a, b) => a.nome.localeCompare(b.nome));

  return (
  <>

    <LinhaCabelo/>
        {cabeloServicos.map((servico, index) => (
          <div key={index}>
           <div class="card">
        <div class="image">
            <img src={`images/${servico.img}.jpg`}/>
        </div>
        <div class="info">
            <div class="name">{servico.nome}</div>
            <div class="description">{servico.descricao}</div>
            <div class="price">R${servico.valor},00</div>
        </div>
    </div>
          </div>
        ))}
    <LinhaMassagem/>
          {massagem.map((servico, index) => (
           <div class="card">
           <div class="image">
               <img src={`images/${servico.img}.jpg`}/>
           </div>
           <div class="info">
               <div class="name">{servico.nome}</div>
               <div class="description">{servico.descricao}</div>
               <div class="price">R${servico.valor},00</div>
           </div>
       </div>
          ))}
    <LinhaSobra/>
      
          {sombrancelha.map((servico, index) => (
            <div class="card">
            <div class="image">
                <img src={`images/${servico.img}.jpg`}/>
            </div>
            <div class="info">
                <div class="name">{servico.nome}</div>
                <div class="description">{servico.descricao}</div>
                <div class="price">R${servico.valor},00</div>
            </div>
        </div>
          ))}
    <LinhaUnha/>
      
          {unha.map((servico, index) => (
            <div class="card">
            <div class="image">
                <img src={`images/${servico.img}.jpg`}/>
            </div>
            <div class="info">
                <div class="name">{servico.nome}</div>
                <div class="description">{servico.descricao}</div>
                <div class="price">R${servico.valor},00</div>
            </div>
        </div>
          ))}

  </>
  );
}

export default Servicos;
