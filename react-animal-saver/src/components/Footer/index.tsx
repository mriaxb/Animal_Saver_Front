import React from 'react';
import styles from './index.module.css';
import email from '../../assets/email.png';
import telefone from '../../assets/telefone.png';
import logo1 from '../../assets/Logotipo Animal Save 1.svg';
import facebook from '../../assets/facebook.png';
import insta from '../../assets/insta.png';
import whats from '../../assets/wuahsapp.png';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <article className={styles.contato}>
                <h5>CONTATO</h5>
                <article className={styles.contato_email}>
                    <img src={email} alt="ft email" />
                    <p>+55 (45) 99985-6896 </p>
                </article>
                <article className={styles.contato_telefone}>
                    <img src={telefone} alt="ft telefone" />
                    <p> animalsaver@gmail.com </p>
                </article>
            </article>
            <article className={styles.mid}>
                <img src={logo1} alt="logo" />
                <p>© 2023 Animal Saver. Todos os direitos reservados</p>    
            </article>
            <article className={styles.redes}>
                <h5>REDES SOCIAIS</h5>
                <article>
                    <img src={facebook} alt="ft facebook" />
                    <img src={whats} alt="ft whats" />
                    <img src={insta} alt="ft insta" />
                </article>
                <button className={styles.button}>Faça Parte</button>
            </article>
        </footer>
    );
};

export default Footer;