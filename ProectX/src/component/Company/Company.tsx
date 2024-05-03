import Container from "react-bootstrap/Container";
import "./Company.scss";

function Company() {
  return (
    <div className="main-container_company">
      <div>
        <h2>Почему мы?</h2>
      </div>
      <Container className="container_company">
        <div>
          <img
            src="/foto/handshake.png"
            alt="handshake"
            className="img-item-1_company"
          />
          <p>
            Работа напрямую <br /> с официальными <br /> компаниями{" "}
          </p>
        </div>
        <div>
          <img src="/foto/time.png" alt="time" className="img-item-2_company" />
          <p>
            Позволяющая <br /> сэкономить <br /> ваше время{" "}
          </p>
        </div>
        <div>
          <img
            src="/foto/plane.png"
            alt="plane"
            className="img-item-3_company"
          />
          <p>
            Чтобы вы <br /> наслаждались <br /> путешествиями{" "}
          </p>
        </div>
      </Container>
    </div>
  );
}

export { Company };
