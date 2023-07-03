import styles from './index.module.css';
import { Link } from 'react-router-dom';
import logoAnimalSave from '../../assets/Logotipo Animal Save 2.svg';

export const Header = () => {

    return(

        <>
            <header data-testid="header-id" className={styles.header}>
                <nav>
                    <img src={logoAnimalSave} alt="img logo" />
                </nav>
                <nav className={styles.links}>
                    <a className={styles.home_class}><Link to="/">Home</Link></a> <span></span>
                    <a><Link to="/pets">Pets</Link></a> <span></span>
                    <a><Link to="/protetor">Protetores</Link></a>
                </nav>
                <nav className={styles.buttons}>
                    <Link to="/loginProtetora">
                        <a className={styles.login_class}>Login</a>
                    </Link>

                    
                    
                    <Link to="/CadastroProtetora"> 
                        <button className={styles.button}>Cadastre-se</button>

                    </Link>
                </nav>
            </header>
        </>
    )
} 