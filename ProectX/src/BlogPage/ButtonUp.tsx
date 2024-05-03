import Button from "react-bootstrap/Button";
import "./ButtonUp.scss";

function ButtonUp() {
  const clickUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Button
        variant="outline-dark"
        className="buttonUp"
        size="lg"
        onClick={clickUp}
      >
        ⬆
      </Button>
    </>
  );
}

export { ButtonUp };
