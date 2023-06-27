import style from '../../components/Servicos/index.module.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import servico1 from '../../assets/servicos/adocao.jpeg';
import servico2 from '../../assets/servicos/arrecadacao.jpeg';
import servico3 from '../../assets/servicos/assinaturas.jpeg';
import servico4 from '../../assets/servicos/Asset-3.png';
import servico5 from '../../assets/servicos/Asset-4.png';
import servico6 from '../../assets/servicos/Asset-6.png';


export const Servicos = () => {
    return(
        <section className={style.section}>
           
            <Container>
                <div id="carouselExampleIndicatorsCats" className="carousel slide">
                    <div className={`carousel-indicators ${style.indicators_pets}`}>
                        <button type="button" data-bs-target="#carouselExampleIndicatorsCats" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicatorsCats" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                                                                                                                                                                </div>
                    <div className={`carousel-inner ${style.carousel_pets}`}>
                        <div className="carousel-item active">
                            <Row>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets_servico1} src={servico1} alt="Card image servico 1" />
                                        
                                        <Card.Body className={style.description_pets}>
                                            <h5><strong>Adote um amigo</strong></h5>
                                            <span>Feira de adoção de pets</span>
                                            <span><strong>Localização:</strong><span>Rio de Janeino</span></span>
                                            <a href='https://www.paypal.com/donate?hosted_button_id=RYTJT9DQUDR7C'>
                                                <div className="text-center mt-4 px-4">
                                                <button className={style.button}>VER MAIS</button>
                                                </div>

                                            </a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={servico3} alt="Card image cap" />
                                       
                                        <Card.Body className={style.description_pets}>
                                            <h5><strong>Assinatura - Cães&Cia</strong></h5>
                                            <span>Feira de adoção de pets</span>
                                            <span><strong>Localização:</strong><span>Rio de Janeino</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <button className={style.button}>VER MAIS</button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={servico2} alt="Card image cap" />
                                
                                        <Card.Body className={style.description_pets}>
                                            <h5><strong>Doação</strong></h5>
                                            <span>Arrecadação de ração para animais</span>
                                            <span><strong>Localização:</strong><span>Rio de Janeino</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <button className={style.button}>VER MAIS</button>

                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        <div className="carousel-item">
                            <Row>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={servico4} alt="Card image cap" />
                                       
                                        <Card.Body className={style.description_pets}>
                                            <h5><strong>Doação</strong></h5>
                                            <span>Arrecadação de materiais de limpeza</span>
                                            <span><strong>Localização:</strong><span>Ong Planeta dos Bichos</span></span>
                                            <a href='https://www.paypal.com/donate?hosted_button_id=RYTJT9DQUDR7C'>
                                                <div className="text-center mt-4 px-4">
                                                    <button className={style.button}>VER MAIS</button>
                                                </div>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={servico5} alt="Card image cap" />
                                       
                                        <Card.Body className={style.description_pets}>
                                            <h5><strong>Doação</strong></h5>
                                            <span>Arrecadação para prevenção de doenças</span>
                                            <span><strong>Localização:</strong><span>Ong Planeta dos Bichos</span></span>
                                            <a href='https://www.paypal.com/donate?hosted_button_id=RYTJT9DQUDR7C'>
                                                <div className="text-center mt-4 px-4">
                                                    <button className={style.button}>VER MAIS</button>
                                                </div>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={servico6} alt="Card image cap" />
                                        <Card.Body className={style.description_pets}>
                                            <h5><strong>Doação</strong></h5>
                                            <span>Arrecadação de ração para animaisa</span>
                                            <span><strong>Localização:</strong><span>Ong Planeta dos Bichos</span></span>
                                            <a href='https://www.paypal.com/donate?hosted_button_id=RYTJT9DQUDR7C'>
                                                <div className="text-center mt-4 px-4">
                                                    <button className={style.button}>VER MAIS</button>
                                                </div>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                       
                    </div>
                    <button className={`carousel-control-prev  `} type="button" data-bs-target="#carouselExampleIndicatorsCats" data-bs-slide="prev">
                        <span className={`carousel-control-prev-icon ${style.seta_esq}`} aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorsCats" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>  
            </Container>
            
            
        </section>
    )
}