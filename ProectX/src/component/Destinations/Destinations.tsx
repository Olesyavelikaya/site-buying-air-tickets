import Container from "react-bootstrap/Container";
import "./Destinations.scss";

function Destinations() {
  return (
    <div className="main-container_destinations">
      <Container className="container_destinations">
        <div className="container-text_description">
          <h2>Вдохновились?</h2>
          <span>Давайте тогда посмотрим билеты</span>
          <p className="arrow-text_destinations">➜</p>
        </div>
      </Container>
    </div>
  );
}

export { Destinations };
