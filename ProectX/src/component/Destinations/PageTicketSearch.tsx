import Container from "react-bootstrap/Container";
import { NavbarHeader } from "../Navbar/Navbar";
import { FormSearchTikets } from "./FormSearchTicket";
import { CardListTickets } from "./CardListTickets";
import { Toaster } from "react-hot-toast";

import "./Destinations.scss";

function PageTicketSearch() {
  return (
    <div>
      <div className="container-bg-navbar">
        <NavbarHeader />
      </div>
      <Container>
        <Toaster position="top-center" />
        <h1 className="title-pageTicketSearch">
          Пора найти самые дешевые авиабилеты{" "}
        </h1>
        <FormSearchTikets />
        <div className="container-CardListTicket">
          <CardListTickets />
        </div>
      </Container>
    </div>
  );
}

export { PageTicketSearch };
