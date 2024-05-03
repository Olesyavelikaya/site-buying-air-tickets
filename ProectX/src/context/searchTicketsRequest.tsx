import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../data/getData";
import { fetchAirTickets } from "./contextType";

const urlSeachTicket = import.meta.env.VITE_URL_SEARCH_TICKETS;

const fetchSearchTickets = createAsyncThunk<
  fetchAirTickets,
  {
    codeCityIsFrom: string | undefined;
    codeCityIsWhere: string | undefined;
    departDate: string | undefined;
    returnData: string | undefined;
  }
>(
  "searchCheapestTickets/fetchSearchCheapestTickets",
  async ({ codeCityIsFrom, codeCityIsWhere, departDate, returnData }) => {
    const urlCheapest =
      urlSeachTicket +
      codeCityIsFrom +
      "&destination=" +
      codeCityIsWhere +
      "&depart_date=" +
      departDate +
      "&return_date=" +
      returnData +
      "&token=ca468d38731903d27f1ec0009921f428";
    const response = await getData(urlCheapest);
    return { cheapestTickets: response.data };
  },
);

export { fetchSearchTickets };
