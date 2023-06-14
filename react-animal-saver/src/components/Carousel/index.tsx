import Carousel from 'react-bootstrap/Carousel';
import style from './index.module.css'

function UncontrolledExample() {
  return (
    <Carousel className={style.carousel}>
      <Carousel.Item>
      <h3>First slide label</h3>

        <Carousel.Caption className={style.carousel_title}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h3>Second slide label</h3>
        
        <Carousel.Caption className={style.carousel_title}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h3>Third slide label</h3>
        
        <Carousel.Caption className={style.carousel_title}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;