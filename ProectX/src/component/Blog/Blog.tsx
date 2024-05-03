import { useRef } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./Blog.scss";

function Blog() {
  const ref = useRef(null);
  return (
    <div className="main-container_blog" ref={ref}>
      <h3>Читайте наш блог</h3>
      <Container className="container-blogPage">
        <Link to={`PageBali`} style={{ textDecoration: "none" }}>
          <Card style={{ width: "calc(100% - 10px)" }}>
            <Card.Img
              bsPrefix="img-card_blog"
              variant="top"
              src="https://img.the-steppe.com/images/news/5241-9xnQQNTE.jpg"
            />
            <Card.Body>
              <Card.Title>10 популярных туристических мест на Бали</Card.Title>
              <Card.Text>
                Индонезийский остров Бали широко известен среди туристов и
                отдыхающих по всему миру. Мы представляем самые популярные
                достопримечательности и места на Бали
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to={`PageAmsterdam`} style={{ textDecoration: "none" }}>
          <Card style={{ width: "calc(100% - 10px)" }}>
            <Card.Img
              bsPrefix="img-card_blog"
              variant="top"
              src="https://traveller-eu.ru/sites/default/files/ukrashenie-doma-niderlandy-gorod-amsterdam-vecherom-doma-kanala-fary-nochnaya-peyzazh-shelkovoy-tkan-800x533.jpg"
            />
            <Card.Body>
              <Card.Title>Три превосходных дня в Амстердаме</Card.Title>
              <Card.Text>
                Индонезийский остров Бали широко известен среди туристов и
                отдыхающих по всему миру. Мы представляем самые популярные
                достопримечательности и места на Бали
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to={`PageLondon`} style={{ textDecoration: "none" }}>
          <Card style={{ width: "calc(100% - 10px)" }}>
            <Card.Img
              bsPrefix="img-card_blog"
              variant="top"
              src="https://tripmydream.cc/travelhub/travel/block_gallery/11/5742/default_115742.jpg"
            />
            <Card.Body>
              <Card.Title>
                Путеводитель по Лондону для семей с детьми
              </Card.Title>
              <Card.Text>
                В Лондоне очень легко провести полную впечатлений неделю, и даже
                больше. Вот все, что Вам нужно знать для того, чтобы спокойно и
                без забот провести отпуск с семьей.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to={`PageEurope`} style={{ textDecoration: "none" }}>
          <Card style={{ width: "calc(100% - 10px)" }}>
            <Card.Img
              bsPrefix="img-card_blog"
              variant="top"
              src="https://lifeglobe.net/media/entry/6402/1a-0.jpg"
            />
            <Card.Body>
              <Card.Title>
                Пять романтических поездок по Европе для двоих
              </Card.Title>
              <Card.Text>
                Mногочисленные туристические направления Европы зачастую
                предлагают совместить в одной поездке все самое лучшее. Мы
                выбрали пять направлений, которые понравятся любой паре.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Container>
    </div>
  );
}

export { Blog };
