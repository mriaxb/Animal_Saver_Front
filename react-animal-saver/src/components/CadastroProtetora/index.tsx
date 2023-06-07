import { Form } from 'react-bootstrap';
import style from './index.module.css';



export const CadastroProtetora = () => {

    return(
        <>
            <main className={style.main}>
                <h1>Bem vindo(a) de volta Protetor(a)!</h1>
                <article className={style.article}>
                    <Form className={style.form}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control type="email" placeholder="Escreva o email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>SENHA</Form.Label>
                            <Form.Control type="password" placeholder='Escreva a senha' />
                        </Form.Group>
                        <article className={style.button_control}>
                            <p>não é cadastrado(a)? <br /> Faça seu cadastro <strong>AQUI</strong> </p>
                            <button className={style.button}>ENTRAR</button>
                        </article>
                        
                    </Form>
                </article>
                
            </main>

        </>
    )
} 