import { useSelector } from "react-redux";
import { CardTickets } from "./CardTickets";
import { selectSearchTicket, selectCity } from "../../context/context";

interface CardListProps {
  flight_number: number;
  departure_at: string;
  duration_to: string;
  price: string;
  transfers: number;
  link: string;
}

function CardListTickets() {
  const ticketsList = useSelector(selectSearchTicket);
  const city = useSelector(selectCity);
  console.log(ticketsList.cheapestTickets);

  return (
    <>
      {ticketsList?.cheapestTickets?.map((elementCard: CardListProps) => (
        <CardTickets
          key={elementCard.flight_number}
          timeCityFrom={elementCard.departure_at.slice(11, 19)}
          dataCityFrom={elementCard.departure_at.slice(0, 10)}
          cityFrom={city.cityIsWhereFrom}
          travelTime={elementCard.duration_to}
          priceTravel={elementCard.price}
          cityWhere={city.cytiIsWhere}
          transfers={elementCard.transfers}
          link={elementCard.link}
        />
      ))}
    </>
  );
}

export { CardListTickets };
