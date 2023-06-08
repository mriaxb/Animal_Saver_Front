import { Col, Form, Row } from 'react-bootstrap';
import style from './index.module.css';



export const CadastroProtetora = () => {

    return(
        <>
            <main className={style.main}>
                <h1>Seja um(a) Protetor(a)!</h1>
                <article className={style.article}>
                    <Form className={style.form}>
                        <Row  className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>NOME</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>TELEFONE</Form.Label>
                                <Form.Control type="text" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>ENDEREÇO</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>ESPAÇO FÍSICO</Form.Label>
                                <Form.Control type="text" placeholder="Password" />
                            </Form.Group>
                        </Row><Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>GASTOS</Form.Label>
                                <Form.Control type="text" placeholder="Password" />
                            </Form.Group>
                        </Row><Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>SENHA</Form.Label>
                                <Form.Control type="password" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>LOTAÇÃO</Form.Label>
                                <Form.Control type="text" placeholder="Password" />
                            </Form.Group>
                        </Row>
                    </Form>
                    <article className={style.button_control}>
                        <button className={style.button}>CADASTRAR</button>
                    </article>
                </article>
                
            </main>

        </>
    )
}