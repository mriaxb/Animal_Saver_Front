import { Container, Row, Col, Card } from "react-bootstrap"
import style from '../Carousel/index.module.css'
import { Link } from "react-router-dom"

export const Carrousel = () => {
    return (
        <section data-testid="carrousel-id">

            <Container >
                <div  id="carouselExampleIndicators" className="carousel slide" >
                    <div className={`carousel-indicators ${style.indicators_pets}`}>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className={`carousel-inner ${style.carousel_pets}`}>
                        <div className="carousel-item active">
                            <Row className={style.card_pai}>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                        <Card.Body className={style.description_pets}>
                                            <h1>Animal Save</h1>
                                            <h5>NA DÚVIDA, AJUDE. <br />NA CERTEZA, ADOTE.</h5>
                                            <span>Nós da Animal Save somos bons em organização e 
                                                    arrecadação de recursos. Nosso objetivo é prestar
                                            prestar ajuda qualificada a quem já ajuda os animais.</span>
                                        </Card.Body> 
                                
                                    </Card>
                                </Col>                               
                            </Row>
                        </div>
                        <div className="carousel-item">
                            <Row className={style.card_pai}>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                      <Card.Body className={style.description_pets}>
                                        <h1>Animal Save</h1>
                                        <h5>Conheça nossos protetores</h5>
                                        <span>Venha fazer parte da nossa comunidade você também!!</span>
                                        <article className={style.article}>
                                            <Link to="/cadastroProtetora"> 
                                                <button className={style.button1}>Seja um(a) Protetor(a)</button>
                                            </Link>
                                            <Link to="/protetor"> 
                                                <button className={style.button2}>Ver Protetores</button>
                                            </Link>       
                                        </article>
                                      </Card.Body> 
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        <div className="carousel-item">
                            <Row className={style.card_pai}>
                                <Col className="text-center">
                                    <Card className={style.card_pets}>
                                      <Card.Body className={style.description_pets}>
                                              <h1>Animal Save</h1>
                                              <h5>NA DÚVIDA, AJUDE. <br />NA CERTEZA, ADOTE.</h5>
                                              <span>Nós da Animal Save somos bons em organização e 
                                                      arrecadação de recursos. Nosso objetivo é prestar
                                              prestar ajuda qualificada a quem já ajuda os animais.</span>
                                          </Card.Body> 
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>  
            </Container>
            
        </section>
           
        

    )
}