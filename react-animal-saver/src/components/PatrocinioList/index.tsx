import logo1 from '../../assets/image-removebg-preview (67).png';
import logo2 from '../../assets/image-removebg-preview (68).png';
import logo3 from '../../assets/image-removebg-preview (69).png';
import logo4 from '../../assets/image-removebg-preview (70).png';
import logo5 from '../../assets/image-removebg-preview (71).png';
import style from '../../components/PatrocinioList/index.module.css';


export const PatrocinioList = () => {

    return(
        <section className={style.section}>
            <article className={style.article}>
                <img src={logo1} alt="logo do PTI" />
            </article>
            <article className={style.article}>
                <img src={logo2} alt="logo do Pronto Dog" />
            </article>
            <article className={style.article}>
                <img src={logo3} alt="logo da Descomplica" />
            </article>
            <article className={style.article}>
                <img src={logo4} alt="logo da Petz" />
            </article>
            <article className={style.article}>
                <img src={logo5} alt="logo da Cobasi" />
            </article>
        </section>
    )
}