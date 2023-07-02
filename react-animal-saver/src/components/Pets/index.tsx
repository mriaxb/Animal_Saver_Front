import { Col, Row, Card, Container, Button, Modal } from 'react-bootstrap';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import style from './index.module.css';
import axios from 'axios';
import { useState, useEffect, SetStateAction } from 'react';


interface Pet {
    id: number;
    nome: string;
    raca: string;
    perfilFisico: string;
    perfilComportamental: string;
    imagem: string;
  }

  export const Pets = () => {
    const [pets, setPets] = useState<Pet[]>([]);
  
    useEffect(() => {
      const fetchPets = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/pets/pet/list');
          if (response.status === 200) {
            setPets(response.data);
          } else {
            console.error('Erro ao obter os pets:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Erro durante a requisição:', error);
        }
      };
  
      fetchPets();
    }, []);
  
    const [showModal, setShowModal] = useState(false);
    const [selectedPetId, setSelectedPetId] = useState(null);
  
    const openModal = (id: number | SetStateAction<null>) => {
      setSelectedPetId(id);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    return (
      <>
        <Container fluid className="g-0">
          <Row className="g-0">
            <Col>
              <div className={`d-flex ${style.title_pets}`}>
                <h1 className="d-flex text-white">Pets</h1>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {pets.map((pet) => (
              <Col className="text-center" key={pet.id}>
                <Card className={style.card_pets}>
                  <Card.Img
                    className={style.img_pets}
                    src={`http://localhost:3000/uploads/${pet.imagem}`}
                    alt="Card image cap"
                  />
                  <div className={style.name_pets}>
                    <h5>{pet.nome}</h5>
                  </div>
                  <Card.Body className={style.description_pets}>
                    <span>
                      <strong>Raça:</strong>
                      <span>{pet.raca}</span>
                    </span>
                    <span>
                      <strong>Porte físico:</strong>
                      <span>{pet.perfilFisico}</span>
                    </span>
                    <div className="text-center mt-4 px-4">
                      <Button variant="primary" onClick={() => openModal(pet.id)}>
                        Detalhar Pets
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
  
        {/* Modal para exibir os detalhes do pet */}
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Detalhes do Pet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedPetId &&
              pets.map((pet) => {
                if (pet.id === selectedPetId) {
                  return (
                    <Row> 
                        <Col>
                            <img src={`http://localhost:3000/uploads/${pet.imagem}`} alt="" />
                        </Col> 
                        <Col>
                            <div className={style.modal_pets} key={pet.id}>
                                <h1 className={style.modal_titulo}>{pet.nome}</h1>
                                <p className={style.p_modal}><span> Raça: </span>{pet.raca}</p>
                                <p className={style.p_modal}><span> Perfil físico: </span>{pet.perfilFisico}</p>
                                <p className={style.p_modal}><span>Perfil Comportamental: </span> {pet.perfilComportamental}</p>
                                {/* Outros detalhes do pet */}
                            </div>
                        </Col> 
                    </Row>
                    
                  );
                }
                return null;
              })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };