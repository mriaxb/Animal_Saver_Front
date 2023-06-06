import logo1 from '../../assets/image-removebg-preview (67).png';
import logo2 from '../../assets/image-removebg-preview (68).png';
import logo3 from '../../assets/image-removebg-preview (69).png';
import logo4 from '../../assets/logo-petz-2022.svg';
import logo5 from '../../assets/image-removebg-preview (71).png';
import style from '../../components/PatrocinioList/index.module.css';


export const PatrocinioList = () => {

    return(
        <section className={style.section}>
            <article className={style.article}>
                <a href="https://prontodog.com.br/">
                    <img src={logo1} alt="logo pronto dog" />
                </a>
            </article>
            <article className={style.article}>
                <a href="https://www.pti.org.br/">
                    <img src={logo2} alt="logo do PTI" />
                </a>
            </article>
            <article className={style.article}>
                <a href="https://uniamerica.br/">
                  <img src={logo3} alt="logo da Descomplica" />
                </a>
            </article>
            <article className={style.article}>
                <a href="https://www.petz.com.br/">
                    <img src={logo4} alt="logo da Petz" />
                </a>
            </article>
            <article className={style.article}>
                <a href="https://www.cobasi.com.br/">
                    <img src={logo5} alt="logo da Cobasi" />
                </a>
            </article>
        </section>
    )
}