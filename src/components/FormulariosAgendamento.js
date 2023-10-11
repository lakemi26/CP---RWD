import React, { useState } from 'react';
import '../components/Formularios.css';

const FormulariosAgendamento = () => {
    const [formData, setFormData] = useState({
      dataAgendamento: '',
      local: '',
      valorcompra: '',
      procedimento: [],
      servico: [],
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

      const handleAcessorioChange = (event) => {
        const { value } = event.target;
      
        setFormData(prevState => {
          if (prevState.acessorio.includes(value)) {
            return { ...prevState, acessorio: prevState.acessorio.filter(item => item !== value) };
          } else {
            return { ...prevState, acessorio: [...prevState.acessorio, value] };
          }
        });
    }

      return (
        <div className="form-container">
            <h1>Agendamento</h1>
          <form onSubmit={handleSubmit}>
    
          <label className='campo'>
            Data do procedimento:
            <input
                type="date"
                name="dataAgendamento"
                value={formData.datacompra}
                onChange={handleChange}
                errorMessage="Verifique a data do Agendamento"
                label="Data do Agendamento"
                required
            />
            </label>

            <label className='campo'>
            Local Desejado:
            <input
                type="text"
                name="local"
                value={formData.localcompra}
                onChange={handleChange}
                placeholder="Local desejado"
                errorMessage="Verifique o local desejado"
                label="Local desejado"
                pattern="^[A-Za-z\s]+$"
                required
            />
            </label>
    
            <div className='checkbox'>
            Você fez algum procedimento nos últimos 6 meses?
            <label>
                <input
                type="radio"
                name="procedimento"
                value="sim"
                checked={formData.revisao === 'sim'}
                onChange={handleChange}
                />
                Sim
            </label>
            <label>
                <input
                type="radio"
                name="procedimento"
                value="nao"
                checked={formData.revisao === 'nao'}
                onChange={handleChange}
                />
                Não
            </label>
            </div>

            <div className='checkbox'>
            <label className='campo'>
            Escolha o procedimento:
            <select
                name="servico"
                value={formData.plano}
                onChange={handleChange}
            >
                <option value="">Selecione...</option>
                <option value="Massagem">Massagem</option>
                <option value="Unhas">Unhas</option>
                <option value="Cabelo">Cabelo</option>
                <option value="Sobrancelhas">Sobrancelhas</option>
            </select>
            </label>    
            </div>

            <div className='botoes'>
            <button>
              <a href="/PagClie">Enviar</a>
            </button>
            </div>
          </form>
        </div>
      );
    };
    
    export default FormulariosAgendamento;
