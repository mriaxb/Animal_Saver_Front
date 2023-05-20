import { Link } from 'react-router-dom'
import styles from './index.module.css'



export const Home = () => {
    return (
        <header className={styles.header}>
            <h1>Animal Saver</h1>
            <nav>
                <a className={styles.home_class}><Link to="/">Home</Link></a> <span></span>
                <a><Link to="/pets">Pets</Link></a> <span></span>
                <a><Link to="/fornecedor">Fornecedores</Link></a> <span></span>
                <a><Link to="/protetor">Protetores</Link></a>
            </nav>
            <button className={styles.button}>Cadastre-se</button>
        </header>
    )
}