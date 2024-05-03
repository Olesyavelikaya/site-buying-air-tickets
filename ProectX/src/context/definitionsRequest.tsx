import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../data/getData";
import { fetchCodeCity } from "./contextType";

const urlIATA = import.meta.env.VITE_URL_IATA;

export const fetchDefinitionCodeCity = createAsyncThunk<
  fetchCodeCity,
  { cityisFrom: string; cityisWhere: string }
>("codeCity/fetchCodeCity", async ({ cityisFrom, cityisWhere }) => {
  const url = urlIATA + cityisFrom + "%20в%20" + cityisWhere;
  const response = await getData(url);
  return {
    isWhereFrom: response.origin.iata,
    isWhere: response.destination.iata,
  };
});
