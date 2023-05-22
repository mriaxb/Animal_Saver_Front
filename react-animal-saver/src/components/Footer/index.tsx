import React from 'react';
import styles from './index.module.css'

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            {/* <img>
            Logo
            </img> */}
            <p>© 2023 Animal Saver. Todos os direitos reservados</p>
        </footer>
    );
};

export default Footer;