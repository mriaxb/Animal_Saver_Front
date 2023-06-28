import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './index.module.css'
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import dog1 from '../../assets/dog12.png'

export const DetalharPets = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={style.btn_pets} onClick={handleShow}>
        Detalhar
      </Button>
      <div className="container">
            <Modal show={show} onHide={handleClose}>
                <Row>
                    <Col>    
                        <Modal.Header className={style.modal_header} closeButton>
                            <div>
                                <Image className={style.img_detalhar} src={dog1} rounded  />
                            </div>
                            <div className={style.conteudo_detalhar}>
                                <div>
                                    <Modal.Title>Rex</Modal.Title>
                                </div>
                                <div className={style.body_detalhar}>
                                    <Modal.Body className={style.body_conteudo}>
                                            <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <span><strong>Perfil físico:</strong><span>Porte grande, caramelo</span></span>
                                            <span><strong>Perfil comportamental:</strong><span>Animal dócil, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></span>
                                    </Modal.Body>
                                </div>
                            </div>
                        </Modal.Header>
                        <Modal.Footer>  
                            <Button className={style.btn_detalhar} onClick={handleClose}>
                                <strong>Quero Adotar</strong>
                            </Button>                      
                            <Button className={style.btn_detalhar} onClick={handleClose}>
                                Fechar
                            </Button>
                        </Modal.Footer>                        
                    </Col>
                </Row>
            </Modal>  
      </div>  
      
    </>
  );
}
