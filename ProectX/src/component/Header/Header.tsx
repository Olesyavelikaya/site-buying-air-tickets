import Container from "react-bootstrap/Container";
import { NavbarHeader } from "../Navbar/Navbar";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="main-container_header">
        <div className="container-bg">
          <Container>
            <NavbarHeader />
            <h2 className="quote">Путешествовать</h2>
            <h2 className="quote-bottom">- значит жить</h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export { Header };
