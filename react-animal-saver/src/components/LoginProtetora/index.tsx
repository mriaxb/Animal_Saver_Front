import { Form } from 'react-bootstrap';
import style from './index.module.css';
import { useState } from 'react';

export const LoginProtetora = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/protetores/protetor/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        console.log("Login realizado com sucesso");
      } else {
        console.log("Erro ao fazer login");
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className={style.main}>
        <h1>Bem vindo(a) de volta Protetor(a)!</h1>
        <article className={style.article}>
          <Form className={style.form} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                type="email"
                placeholder="Escreva o email"
                value={email}
                onChange={(e:any) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>SENHA</Form.Label>
              <Form.Control
                type="password"
                placeholder="Escreva a senha"
                value={senha}
                onChange={(e:any) => setSenha(e.target.value)}
              />
            </Form.Group>
            <article className={style.button_control}>
              <p>não é cadastrado(a)? <br /> Faça seu cadastro <strong>AQUI</strong> </p>
              <button className={style.button}>ENTRAR</button>
            </article>
          </Form>
        </article>
      </main>
    </>
  );
};
