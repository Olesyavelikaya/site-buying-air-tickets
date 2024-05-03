import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LogIn } from "../Modal/Modal";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

function NavbarHeader() {
  const clickScrollTo = () => {
    scroller.scrollTo("ScrollToBlog", {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50,
    });
  };

  return (
    <>
      <Navbar expand="lg" className="bg-navbar">
        <Container>
          <div className="container-logo">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <span className="color-white">
                <img src="/foto/logo.png" alt="logo" className="nav-logo" />
              </span>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end" activeKey="/home" as="ul">
              <li className="item-nav">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li className="item-nav">
                <Link
                  to={"PageTicketSearch"}
                  style={{ textDecoration: "none" }}
                >
                  Destinations
                </Link>
              </li>
              <li className="item-nav">
                <a onClick={clickScrollTo}> Blog </a>
              </li>
            </Nav>
            <LogIn />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export { NavbarHeader };
