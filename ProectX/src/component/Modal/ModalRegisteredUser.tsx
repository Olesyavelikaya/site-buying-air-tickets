import { MouseEventHandler } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface modalRegisteredProps {
  show: boolean;
  onHide: () => void;
  user: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function ModalRegisteredUser(props: modalRegisteredProps) {
  const { show, onHide, onClick, user } = props;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p className="userName">Здравствуйте, {user}!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={onClick}>
          Спасибо
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { ModalRegisteredUser };
