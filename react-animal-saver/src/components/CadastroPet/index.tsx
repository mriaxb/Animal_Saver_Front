import {useCallback, useState } from "react";
import {createPet} from '../../services/pet'

import { Col, Form, Row } from 'react-bootstrap';
import style from './index.module.css';

export const CadastroPet = () => {
  const [nome, setNome] = useState<string>('');
  const [raca, setRaca] = useState<string>('');
  const [perfilFisico, setPerfilFisico] = useState<string>('');
  const [perfilComportamental, setPerfilComportamental] = useState<string>('');
  const [foto, setFoto] = useState<string>('');

  const addPet = (() => {
    const newPet = {
      id: '0',
      nome,
      raca,
      perfilFisico,
      perfilComportamental,
      foto,
    }
    createPet(newPet);
  });

  return (
    <>
      <main className={style.main}>
        <h1>CADASTRE SEU ANIMAL PROTEGIDO</h1>
        <article className={style.article}>
          <Form className={style.form}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFile">
                <Form.Label>IMAGEM</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Insira a foto"
                  value={foto}
                  onChange={(event) => setFoto(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>NOME</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escreva o nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>RAÇA</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escreva a raça"
                  value={raca}
                  onChange={(event) => setRaca(event.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>PERFIL FISICO</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descreva o perfil físico"
                  value={perfilFisico}
                  onChange={(event) => setPerfilFisico(event.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Perfil Comportamental</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descreva o perfil comportamental"
                  value={perfilComportamental}
                  onChange={(event) => setPerfilComportamental(event.target.value)}
                />
              </Form.Group>
            </Row>

            <button  
              className={style.button}
              onClick={addPet} 
            >
              CADASTRAR
            </button>
          </Form>
        </article>
      </main>
    </>
  );
};
