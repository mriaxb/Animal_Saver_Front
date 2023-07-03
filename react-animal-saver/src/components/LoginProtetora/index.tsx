import { Form, Button } from 'react-bootstrap';
import style from './index.module.css';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';


export const LoginProtetora = () => {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    const loggedInUser = localStorage.getItem("email");
    if (loggedInUser) {
      // console.log(loggedInUser)

      console.log("usuario ja logado")
    
    }
      console.log(loggedInUser)
    console.log("usuario não logado")

    // document.getElementById("button")?.hidden
  
  }, []);


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data = {
        email,
        senha,
      };

      const response = await fetch('http://localhost:3002/api/protetores/protetor/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
     
      
      
      if (response.ok) {
        console.log('Login realizado');
        localStorage.setItem(email, senha);
       
        // setIsLoggedIn(true)
        // Autenticação bem-sucedida, redirecionar ou fazer outras ações necessárias
      } else {
        console.log('Erro');
        console.log(email);
        console.log(senha);
        // Autenticação falhou, tratar o erro de acordo com a resposta da API
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      // Erro ao fazer a requisição
      console.error(error);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  return (
    <>
      <main data-testid="login-id" className={style.main}>
        <h1>Bem vindo(a) de volta Protetor(a)!</h1>
        <article className={style.article}>
          <Form data-testid="formulario-login-id" className={style.form} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                type="email"
                placeholder="Escreva o email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>SENHA</Form.Label>
              <Form.Control
                type="password"
                placeholder="Escreva a senha"
                value={senha}
                onChange={handleSenhaChange}
              />
            </Form.Group>
            <article className={style.button_control}>
              <p>
                não é cadastrado(a)? <br /> Faça seu cadastro <strong>AQUI</strong>{' '}
              </p>
              <Button data-testid="formulario-login-id" id='button' type="submit" className={style.button}>
                ENTRAR
              </Button>
            </article>
          </Form>
        </article>
      </main>
    </>
  );
};