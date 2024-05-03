import Container from "react-bootstrap/Container";
import "./Footer.scss";

function Footer() {
  return (
    <div className="main-container_footer">
      <Container>
        <a href="#">Follow us</a>
        <div className="container-list_footer">
          <a href="#">Home</a>
          <a href="#">Destinations</a>
          <a href="#">Blog</a>
          <a href="#">Contact </a>
        </div>
        <p>Copyrate 2024</p>
      </Container>
    </div>
  );
}

export { Footer };
