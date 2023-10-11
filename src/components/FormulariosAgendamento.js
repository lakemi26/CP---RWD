import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../components/Formularios.css';

const FormulariosAgendamento = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Lógica para processar os dados do formulário
    // Navegação para a próxima página (se houver)
  };

  return (
    <div className="form-container">
      <h1>Agendamento</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='campo'>
          Data do procedimento:
          <Controller
            name="dataAgendamento"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} type="date" />}
          />
          {errors.dataAgendamento && <p>{errors.dataAgendamento.message}</p>}
        </label>

        <label className='campo'>
          Local Desejado:
          <Controller
            name="local"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} type="text" placeholder="Local desejado" />}
          />
          {errors.local && <p>{errors.local.message}</p>}
        </label>

        <div className='checkbox'>
          Você fez algum procedimento nos últimos 6 meses?
          <label>
            <Controller
              name="procedimento"
              control={control}
              defaultValue=""
              rules={{ required: 'Selecione uma opção' }}
              render={({ field }) => (
                <input {...field} type="radio" value="sim" />
              )}
            /> Sim
          </label>
          <label>
            <Controller
              name="procedimento"
              control={control}
              defaultValue=""
              rules={{ required: 'Selecione uma opção' }}
              render={({ field }) => (
                <input {...field} type="radio" value="nao" />
              )}
            /> Não
          </label>
          {errors.procedimento && <p>{errors.procedimento.message}</p>}
        </div>

        <div className='checkbox'>
          <label className='campo'>
            Escolha o procedimento:
            <Controller
              name="servico"
              control={control}
              defaultValue=""
              rules={{ required: 'Selecione uma opção' }}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Selecione...</option>
                  <option value="Massagem">Massagem</option>
                  <option value="Unhas">Unhas</option>
                  <option value="Cabelo">Cabelo</option>
                  <option value="Sobrancelhas">Sobrancelhas</option>
                </select>
              )}
            />
          </label>
          {errors.servico && <p>{errors.servico.message}</p>}
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
