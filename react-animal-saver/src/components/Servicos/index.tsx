import adocao from '../../assets/adocao.jpeg';
import arrecadacao from '../../assets/arrecadacao.jpeg';
import assinatura from '../../assets/assinaturas.jpeg';
import setaEsquerda from '../../assets/setaEsq.png';
import setaDireita from '../../assets/setaDir.png';
import style from '../../components/Servicos/index.module.css'

export const Servicos = () => {
    return(
        <section className={style.section}>
            <h1 className={style.title}>
                SERVIÇOS
                <hr />
            </h1>
        
            <article className={style.article_pai}>
                <img src={setaEsquerda} alt="seta esquerda" className={style.seta} />
                <article className={style.article}>
                    <div className={style.banner_title}>ADOÇÕES</div>
                    <img src={adocao} alt="foto de adocao" className={style.banner_foto}/>
                    <button className={style.button}>VER MAIS</button>
                </article>
                <article className={style.article}>
                    <div className={style.banner_title}>ARRECADAÇÕES</div>
                    <img src={arrecadacao} alt="foto de arrecadacao" className={style.banner_foto}/>
                    <button className={style.button}>VER MAIS</button>
                </article>
                <article className={style.article}>
                    <div className={style.banner_title}>ASSINAURAS</div>
                    <img src={assinatura} alt="foto de assinatura" className={style.banner_foto}/>
                    <button className={style.button}>VER MAIS</button>
                </article>
                <img src={setaDireita} alt="seta direita" className={style.seta}/>
            </article>
        </section>
    )
}