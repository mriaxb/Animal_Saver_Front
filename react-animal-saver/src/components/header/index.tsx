import styles from './index.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Animal Saver</h1>
            <nav>
                <a className={styles.home_class}>Home</a> <span></span>
                <a>Pets</a> <span></span>
                <a>Fornecedores</a> <span></span>
                <a>Protetores</a>
            </nav>
            <button className={styles.button}>Cadastre-se</button>
        </header>
    )
}