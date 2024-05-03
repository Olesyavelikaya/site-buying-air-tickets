import { createSlice } from "@reduxjs/toolkit";
import { stateTicket } from "./contextType";
import { fetchSearchTickets } from "./searchTicketsRequest";

const initialStateTicket: stateTicket = {
  departDate: "",
  returnDate: "",
  cheapestTickets: [],
  status: "idle",
};

const searchForTickets = createSlice({
  name: "searchTicket",
  initialState: initialStateTicket,
  reducers: {
    setDepartData(state, action) {
      state.departDate = action.payload;
    },
    setReturnData(state, action) {
      state.returnDate = action.payload;
    },
    resetSearch(state) {
      state.cheapestTickets = [];
      state.departDate = "";
      state.returnDate = "";
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchTickets.pending, (state) => {
      state.status = "loading";
    }),
      builder.addCase(fetchSearchTickets.fulfilled, (state, action) => {
        state.status = "successed";
        state.cheapestTickets = action.payload.cheapestTickets;
      }),
      builder.addCase(fetchSearchTickets.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export { initialStateTicket, searchForTickets };
