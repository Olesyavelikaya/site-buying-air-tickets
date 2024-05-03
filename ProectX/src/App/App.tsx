import "./App.css";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { Header } from "../component/Header/Header";
import { Carousels } from "../component/Carousels/Carousel";
import { Destinations } from "../component/Destinations/Destinations";
import { Blog } from "../component/Blog/Blog";
import { Company } from "../component/Company/Company";
import { Footer } from "../component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Carousels />
      <Company />
      <Element name="ScrollToBlog">
        <Blog />
      </Element>
      <Link to={"PageTicketSearch"} style={{ textDecoration: "none" }}>
        <Destinations />
      </Link>
      <Footer />
    </>
  );
}

export default App;
