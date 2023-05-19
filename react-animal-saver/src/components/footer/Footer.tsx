import React from 'react';
import styles from './Footer.module.css'

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            {/* <img>
            Logo
            </img> */}
            <p>© 2022 Animal Saver. Todos os direitos reservados</p>
        </footer>
    );
};

export default Footer;