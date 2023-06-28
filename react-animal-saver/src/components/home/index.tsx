import { Carrousel } from '../Carousel';
import { PatrocinioList } from '../PatrocinioList';
import { Servicos } from '../Servicos';
import style from './index.module.css';

export const Home = () => {

    return (

        <div>
            <article className={style.carrousel_fundo}>
                <Carrousel/>
            </article>
            <PatrocinioList></PatrocinioList>
            <Servicos></Servicos>
        </div>
    )
}