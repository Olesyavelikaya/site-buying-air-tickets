import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {
  selectUserModal,
  AppDispatch,
  setUserName,
  setUserPassword,
} from "../../context/context";
import { ModalRegisteredUser } from "./ModalRegisteredUser";
import "./Modal.scss";

function LogIn() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectUserModal);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(event.target.value));
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserPassword(event.target.value));
  };

  const onSubmitModal = () => {
    Cookies.set("name", currentUser.userName);
    Cookies.set("password", currentUser.userPassword);
    handleShow();
  };

  const registeredUser = Cookies.get("name");

  return (
    <React.Fragment>
      <Button
        variant="outline-light"
        className="nav-button"
        onClick={handleShow}
      >
        Войти
      </Button>
      {registeredUser ? (
        <>
          <ModalRegisteredUser
            show={show}
            onHide={handleClose}
            onClick={handleClose}
            user={registeredUser}
          />
        </>
      ) : (
        <Modal show={show} onHide={handleClose} onExit={onSubmitModal}>
          <Modal.Header closeButton>
            <Modal.Title> Войти</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Floating className="input-user">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="Ваше имя"
                  onChange={handleChangeName}
                />
                <label htmlFor="floatingInputCustom">Введите ваше имя</label>
              </Form.Floating>
              <Form.Floating>
                <Form.Control
                  id="floatingPasswordCustom"
                  type="password"
                  placeholder="Ваш пароль"
                  value={currentUser.userPassword}
                  onChange={handleChangePassword}
                />
                <label htmlFor="floatingPasswordCustom">
                  Введите ваш пароль
                </label>
              </Form.Floating>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleClose}>
              Войти
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </React.Fragment>
  );
}

export { LogIn };
