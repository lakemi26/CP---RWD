import React, { useState } from 'react';
import '../components/Formularios.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    nascimento: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco: '',
    numero: '',
    concordoTermosUso: false,
    concordoContrato: false,
    receberSms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para processar os dados do formulário
    console.log(formData);
    // Navegação para a próxima página (se houver)
  };

  return (
    <div className="form-container">
        <h1>Cadastro Pessoal</h1>
      <form onSubmit={handleSubmit}>

        <label className='campo'>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder= "Nome completo"
            errorMessage=
                "Verifique seu nome!"
            label= "Nome"
            pattern= "^[A-Za-z0-9]{3,16}$"
            required
          />
        </label>
        
        <label className='campo'>
          Data de Nascimento:
          <input
            type="date"
            name="nascimento"
            value={formData.nascimento}
            onChange={handleChange}
            required
          />
        </label>

        <label className='campo'>
        CPF:
        <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="Digite seu CPF"
            pattern="^\d{11}$"
            required
        />
        </label>

        <label className='campo'>
        Email:
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu email"
            required
        />
        </label>

        <label className='campo'>
        Telefone:
        <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Digite seu telefone"
            required
        />
        </label>      
        
        <label className='campo'>
        Endereço:
        <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            placeholder="Digite seu endereço"
            required
        />
        </label>

        <label className='campo'>
        Número:
        <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            placeholder="Digite o número"
            required
        />
        </label>

        {/* Checkbox para Concordo com os Termos de Uso */}
        <label>
          <input
            type="checkbox"
            name="concordoTermosUso"
            checked={formData.concordoTermosUso}
            onChange={handleChange}
            required
          /> Concordo com os Termos de Uso
        </label>

        {/* Checkbox para Declaro que li o Contrato */}
        <label>
          <input
            type="checkbox"
            name="concordoContrato"
            checked={formData.concordoContrato}
            onChange={handleChange}
            required
          /> Declaro que li o Contrato e concordo com todos os tópicos listados
        </label>

        {/* Checkbox para Receber SMS com informações sobre o clima */}
        <label>
          <input
            type="checkbox"
            name="receberSms"
            checked={formData.receberSms}
            onChange={handleChange}
          /> Desejo receber SMS com informações sobre o clima na minha região
        </label>

        <button type="submit">
            <a href="/AgendamentoFinal">Enviar</a>
        </button>
        
      </form>
    </div>
  );
};

export default Formulario;
