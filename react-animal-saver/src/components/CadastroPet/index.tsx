import { useRef, useState } from "react";
import {createPet} from '../../services/pet'

import { Col, Form, Row } from 'react-bootstrap';
import style from './index.module.css';

import uploadFile from '../../assets/uploadFile.svg';

export const CadastroPet = () => {
  const [nome, setNome] = useState<string>('');
  const [raca, setRaca] = useState<string>('');
  const [perfilFisico, setPerfilFisico] = useState<string>('');
  const [perfilComportamental, setPerfilComportamental] = useState<string>('');
  const [imagem, setImagem] = useState<File | null>(null);

  
  const [imagemSelecionada, setImagemSelecionada] = useState('');

  const popularImagem = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImagem(event.target.files[0]);
        const urlImagem = URL.createObjectURL(event.target.files[0]);
        setImagemSelecionada(urlImagem);

      

    }
  };
  const fileInputRef = useRef<HTMLInputElement>(null);

  const inserirImagem = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  const handleSubmit = async (event:any) => {
    event.preventDefault();

    const newPet = new FormData();
    newPet.append('nome', nome);
    newPet.append('raca', raca);
    newPet.append('perfilFisico', perfilFisico);
    newPet.append('perfilComportamental', perfilComportamental);
    if(imagem){
     newPet.append('imagem', imagem);
    }
   
    createPet(newPet).finally(() => {
      setNome("");
      setRaca("");
      setPerfilComportamental("");
      setPerfilFisico("");
      setImagem(null);
      setImagemSelecionada("");
      console.log(newPet);
    })
  };

  return (
    <>
      <main className={style.main}>
        <h1>CADASTRE SEU ANIMAL PROTEGIDO</h1>
        <article className={style.article}>
          <Form className={style.form} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} className={`d-flex justify-content-center align-items-center`}  controlId="formFile">
                <div onClick={inserirImagem} className={`${style.file_div} d-flex justify-content-center align-items-center`} >
                  {imagemSelecionada ? (

                    <img src={imagemSelecionada}  alt="Imagem pet" />
                  ) : (
                   <img src={uploadFile} className={style.file_img} alt="Ícone de upload" />
                  )}
                </div>
                <Form.Control
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={popularImagem}
                /> 
              </Form.Group>

            <Col>
            <Row className="mb-3">
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
                  as="textarea"
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
                  as="textarea"
                  placeholder="Descreva o perfil comportamental"
                  value={perfilComportamental}
                  onChange={(event) => setPerfilComportamental(event.target.value)}
                />
              </Form.Group>
            </Row>
            </Col>
            </Row>

            <button  
              className={style.button}
            >
              CADASTRAR
            </button>
            
          </Form>
        </article>
      </main>
    </>
  );
};
