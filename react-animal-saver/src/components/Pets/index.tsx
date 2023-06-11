import { Col, Row, Card, Button, Container } from 'react-bootstrap';
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
            </Container>
            
        </>
    )
}