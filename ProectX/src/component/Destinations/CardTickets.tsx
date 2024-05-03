import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CardList.scss";

interface CardTicketsProps {
  key?: number;
  timeCityFrom?: string;
  cityFrom?: string;
  dataCityFrom?: string;
  travelTime?: string;
  timeCityWhere?: string;
  cityWhere?: string;
  dataCityWhere?: string;
  priceTravel?: string;
  transfers: number;
  link: string;
}

function CardTickets(props: CardTicketsProps) {
  const {
    key,
    timeCityFrom,
    cityFrom,
    dataCityFrom,
    travelTime,
    priceTravel,
    cityWhere,
    transfers,
    link,
  } = props;
  return (
    <>
      <Card key={key}>
        <Card.Body>
          <div className="main-container_card-ticket">
            <div className="container-city_from">
              <h5 className="time-city_from">{timeCityFrom}</h5>
              <h6 className="city-from">{cityFrom}</h6>
              <p className="data-city_from">{dataCityFrom}</p>
            </div>
            <div className="container-information_flight">
              <p className="travel-time">{travelTime} минут</p>
              <img src="/foto/air.png" alt="air" />
              <p className="price-travel">{priceTravel} руб.</p>
            </div>
            <div className="container-city_where">
              <h6 className="city-where">{cityWhere}</h6>
              <p className="transfers">Пересадок: {transfers}</p>

              <Button variant="dark">
                <a
                  href={`https://www.aviasales.ru${link}`}
                  className="link-ticket"
                >
                  Купить
                </a>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export { CardTickets };
