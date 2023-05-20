import { Link } from 'react-router-dom'
import styles from './index.module.css'
import { motion } from 'framer-motion'
import { useState, useEffect} from 'react'
import React from 'react';
import imagemDog1 from '../../assets/dog1.jpg'
import imagemDog2 from '../../assets/dog2.jpg'
import imagemDog3 from '../../assets/dog3.jpg'
import imagemDog4 from '../../assets/dog4.jpg'


const images = [imagemDog1, imagemDog2, imagemDog3, imagemDog4]


export const Home = () => {
    const carousel = React.useRef(HTMLElement.arguments);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        console.log(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [])

    return (
        <div>
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
            <main className={styles.div_carousel}>
                
                   <motion.main ref={carousel} className={styles.carousel} whileTap={{cursor: "grabbing"}}>
                        <motion.main className={styles.inner_carousel} drag="x" dragConstraints={{right: 0, left: -width}} initial={{x: 100}} animate={{x: 0}} transition={{duration: 0.8}}>
                            {images.map(images =>(
                                <motion.main key={images} className={styles.item_carousel}>
                                    <img src={images} alt="Imagens de animais abandonados" />
                                </motion.main>
                            ))}
                        </motion.main>
                   </motion.main>
                
            </main>
        </div>
    )
}