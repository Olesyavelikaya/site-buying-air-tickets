import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { dataCarousel } from "./dataCarousel";
import "./Carousels.scss";

function Carousels() {
  return (
    <>
      <Container className="container-main_carousel">
        <h2>Посетите каждый уголок нашей планеты</h2>
        <h4>А мы вам поможем в этом</h4>
        <Carousel className="conteiner-carousel">
          {dataCarousel.map((cardData) => (
            <Carousel.Item key={cardData.id}>
              <img
                src={cardData.img}
                alt={cardData.title}
                className="img-carousel"
              />
              <Carousel.Caption>
                <h5>{cardData.title}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

export { Carousels };
