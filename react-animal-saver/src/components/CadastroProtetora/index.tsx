import { Col, Form, Row } from 'react-bootstrap';
import style from './index.module.css';
import { useState } from 'react';

export const CadastroProtetora = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [espacoFisico, setEspacoFisico] = useState('');
  const [email, setEmail] = useState('');
  const [gastos, setGastos] = useState('');
  const [senha, setSenha] = useState('');
  const [lotacao, setLotacao] = useState('');

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    try {
      const data = {
        nome,
        telefone,
        endereco,
        espacoFisico,
        email,
        gastos,
        senha,
        lotacao,
      };

      const response = await fetch('http://localhost:3000/api/protetores/protetor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const novoProtetor = await response.json();
        console.log('Protetor cadastrado:', novoProtetor);
      } else {
        console.error('Erro ao cadastrar o protetor:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro durante a requisição:', error);
    }
  };

  return (
    <>
      <main className={style.main}>
        <h1>Seja um(a) Protetor(a)!</h1>
        <article className={style.article}>
          <Form className={style.form} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>NOME</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escreva o nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>TELEFONE</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escreva o telefone"
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>ENDEREÇO</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escreva o endereço"
                  value={endereco}
                  onChange={(event) => setEndereco(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>ESPAÇO FÍSICO</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escreva o espaço físico"
                  value={espacoFisico}
                  onChange={(event) => setEspacoFisico(event.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escreva o email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>GASTOS</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escreva os gastos"
                  value={gastos}
                  onChange={(event) => setGastos(event.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>SENHA</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Escreva a senha"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>LOTAÇÃO</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escreva a lotação"
                  value={lotacao}
                  onChange={(event) => setLotacao(event.target.value)}
                />
              </Form.Group>
            </Row>

            <button type="submit" className={style.button}>
              CADASTRAR
            </button>
          </Form>
        </article>
      </main>
    </>
  );
};
