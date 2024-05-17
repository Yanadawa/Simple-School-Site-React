import { Carousel } from 'react-bootstrap'
import hero1 from './../Assets/h1.jpg'
import hero2 from './../Assets/h2.jpg'
import hero3 from './../Assets/h3.jpg'

const Hero = () => {
  return (
    <div className="caroban">
        <Carousel className="col-lg-8 offset-lg-2 caroban">
            <Carousel.Item>
                <img className="d-block caro" src={hero1} />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block caro" src={hero2} />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img className="d-block caro" src={hero3} />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Hero;