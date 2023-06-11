import { Col, Row, Card, Button, Container } from 'react-bootstrap';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import style from './index.module.css'
import cat1 from '../../assets/dog12.png'

export const Pets = () => {
    return (
        <>
            <Container fluid className="g-0">
                <Row className="g-0">
                    <Col>
                        <div className={`d-flex ${style.title_pets}`}>
                            <h1 className="d-flex text-white">Cães</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className={`carousel-indicators ${style.indicators_pets}`}>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className={`carousel-inner ${style.carousel_pets}`}>
                        <div className="carousel-item active">
                            <Row>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
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
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
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
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>  
            </Container>
            <Container fluid className="g-0">
                <Row className="g-0">
                    <Col>
                        <div className={`d-flex ${style.title_pets}`}>
                            <h1 className="d-flex text-white">Gatos</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div id="carouselExampleIndicatorsCats" className="carousel slide">
                    <div className={`carousel-indicators ${style.indicators_pets}`}>
                        <button type="button" data-bs-target="#carouselExampleIndicatorsCats" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicatorsCats" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicatorsCats" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className={`carousel-inner ${style.carousel_pets}`}>
                        <div className="carousel-item active">
                            <Row>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
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
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
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
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsCats" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorsCats" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>  
            </Container>
            <Container fluid className="g-0">
                <Row className="g-0">
                    <Col>
                        <div className={`d-flex ${style.title_pets}`}>
                            <h1 className="d-flex text-white">Cavalos</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div id="carouselExampleIndicatorsHorse" className="carousel slide">
                    <div className={`carousel-indicators ${style.indicators_pets}`}>
                        <button type="button" data-bs-target="#carouselExampleIndicatorsHorse" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicatorsHorse" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicatorsHorse" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className={`carousel-inner ${style.carousel_pets}`}>
                        <div className="carousel-item active">
                            <Row>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
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
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
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
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Img className={style.img_pets} src={cat1} alt="Card image cap" />
                                        <div className={style.name_pets}>
                                            <span>Rex</span>
                                        </div>
                                        <Card.Body className={style.description_pets}>
                                        <span><strong>Idade:</strong><span>6 meses</span></span>
                                            <span><strong>Raça:</strong><span>Indefinido</span></span>
                                            <span><strong>Vizualizações:</strong><span>100</span></span>
                                            <div className="text-center mt-4 px-4">
                                                <Button className={style.btn_pets}>Detalhar</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsHorse" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorsHorse" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>  
            </Container>
        </>
    )
}