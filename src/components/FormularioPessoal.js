import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../components/Formularios.css';

const Formulario = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    console.log(data); // Verifique se os dados estão corretos aqui
    setFormData(data);
    localStorage.setItem('formData', JSON.stringify(data));
    // Lógica para processar os dados do formulário e navegação
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleClearData = () => {
    localStorage.removeItem('formData');
    setFormData({});
  };

  return (
    <div className="form-container">
      <h1>Cadastro Pessoal</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='campo'>
          Nome:
          <Controller
            name="nome"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} type="text" placeholder="Nome completo" />}
          />
          {errors.nome && <p>{errors.nome.message}</p>}
        </label>

        <label className='campo'>
          Data de Nascimento:
          <Controller
            name="nascimento"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} type="date" />}
          />
          {errors.nascimento && <p>{errors.nascimento.message}</p>}
        </label>

        <label className='campo'>
          CPF:
          <Controller
            name="cpf"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório', pattern: /^\d{11}$/ }}
            render={({ field }) => <input {...field} type="text" placeholder="Digite seu CPF" />}
          />
          {errors.cpf && <p>{errors.cpf.message}</p>}
        </label>

        <label className='campo'>
          Email:
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} type="email" placeholder="Digite seu email" />}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>

        <label className='campo'>
          Senha:
          <Controller
            name="senha"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório', minLength: 6 }} // Exemplo de regra de validação para a senha
            render={({ field }) => <input {...field} type="password" placeholder="Digite sua senha" />}
          />
          {errors.senha && <p>{errors.senha.message}</p>}
        </label>


        <label className='campo'>
          Telefone:
          <Controller
            name="telefone"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} type="tel" placeholder="Digite seu telefone" />}
          />
          {errors.telefone && <p>{errors.telefone.message}</p>}
        </label>

        <label className='campo'>
          Endereço:
          <Controller
            name="endereco"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} type="text" placeholder="Digite seu endereço" />}
          />
          {errors.endereco && <p>{errors.endereco.message}</p>}
        </label>

        <label className='campo'>
          Número:
          <Controller
            name="numero"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} type="text" placeholder="Digite o número" />}
          />
          {errors.numero && <p>{errors.numero.message}</p>}
        </label>

        <label>
          <Controller
            name="concordoTermosUso"
            control={control}
            defaultValue={false}
            rules={{ required: 'Você deve concordar com os termos de uso' }}
            render={({ field }) => (
              <input {...field} type="checkbox" />
            )}
          /> Concordo com os Termos de Uso.
          {errors.concordoTermosUso && <p>{errors.concordoTermosUso.message}</p>}
        </label>

        <label>
          <Controller
            name="concordoContrato"
            control={control}
            defaultValue={false}
            rules={{ required: 'Você deve declarar que leu o contrato' }}
            render={({ field }) => (
              <input {...field} type="checkbox" />
            )}
          /> Declaro que li o Contrato e concordo com todos os tópicos listados.
          {errors.concordoContrato && <p>{errors.concordoContrato.message}</p>}
        </label>

        <button type="submit">
            <a href="/AgendamentoFinal">Enviar</a>
        </button>
      </form>
    </div>
  );
};

export default Formulario;
