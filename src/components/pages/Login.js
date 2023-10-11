import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormInput from "../FormInput";
import "./Login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    senha: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Insira um endereço de email válido!",
      label: "",
      required: true,
    },
    {
      id: 2,
      name: "senha",
      type: "password",
      placeholder: "Senha",
      errorMessage:
        "Sua senha deve conter entre 8-20 caracteres e incluir pelo menos 1 letra, 1 número e 1 caractere especial!",
      label: "",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setValues(savedData);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(values));
    // Lógica para processar os dados do formulário e navegação
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
  
    <div className="login">
      <div className="imagemLogin">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <p>
          Não tem uma conta? Crie{" "}
          <Link 
          to="/CriarConta">aqui!</Link>
        </p>
        <button>
          <a href="/PagClie">Entrar</a>
        </button>
      </form>
    </div>
  </div>  
  );
};

export default Login;