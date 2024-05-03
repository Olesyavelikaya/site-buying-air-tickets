import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  selectCity,
  AppDispatch,
  setCityIsWhereFrom,
  setCityIsWhere,
  selectSearchTicket,
  setDepartData,
  setReturnData,
  resetSearch,
  resetCity,
} from "../../context/context";
import { fetchDefinitionCodeCity } from "../../context/definitionsRequest";
import { fetchSearchTickets } from "../../context/searchTicketsRequest";
import "./Destinations.scss";

function FormSearchTikets() {
  const dispatch = useDispatch<AppDispatch>();
  const currentData = useSelector(selectSearchTicket);
  const establishedCity = useSelector(selectCity);

  const handleChangeCityIsFrom = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (dispatch(setCityIsWhereFrom(event.target.value))) {
      dispatch(setCityIsWhereFrom(event.target.value));
      dispatch(resetSearch());
    }
  };

  const handleChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (dispatch(setCityIsWhere(event.target.value))) {
      dispatch(setCityIsWhere(event.target.value));
      dispatch(resetSearch());
    }
  };

  const handleChangeDepartData = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setDepartData(event.target.value));
  };

  const handleChangeReturnData = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setReturnData(event.target.value));
  };

  const onSumbitCity = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      fetchDefinitionCodeCity({
        cityisFrom: establishedCity.cityIsWhereFrom,
        cityisWhere: establishedCity.cytiIsWhere,
      })
    );

    dispatch(
      fetchSearchTickets({
        codeCityIsFrom: establishedCity.codeCityIsWhereFrom,
        codeCityIsWhere: establishedCity.codeCytiIsWhere,
        departDate: currentData.departDate,
        returnData: currentData.returnDate,
      })
    );
  };

  const onClickResetForm = () => {
    dispatch(resetSearch());
    dispatch(resetCity());
  };

  return (
    <>
      <Form onSubmit={onSumbitCity}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextWhere1">
            <Form.Label>Откуда</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите город"
              value={establishedCity.cityIsWhereFrom}
              onChange={handleChangeCityIsFrom}
              pattern="^[А-Яа-яЁё\s]+$"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTextWhere2">
            <Form.Label>Куда</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите город"
              value={establishedCity.cytiIsWhere}
              onChange={handleChangeCity}
              pattern="^[А-Яа-яЁё\s]+$"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridWhen">
            <Form.Label>Когда</Form.Label>
            <Form.Control
              type="date"
              placeholder="Когда"
              value={currentData.departDate}
              onChange={handleChangeDepartData}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridBack">
            <Form.Label>Обратно</Form.Label>
            <Form.Control
              type="date"
              placeholder="Обратно"
              value={currentData.returnDate}
              onChange={handleChangeReturnData}
            />
          </Form.Group>
        </Row>
        <Button
          variant="outline-dark"
          type="submit"
          className="button-search_tikets"
        >
          Найти билеты
        </Button>
        <Button
          variant="outline-dark"
          type="button"
          className="button-search_tikets"
          onClick={onClickResetForm}
        >
          Сбросить
        </Button>
      </Form>
    </>
  );
}

export { FormSearchTikets };
