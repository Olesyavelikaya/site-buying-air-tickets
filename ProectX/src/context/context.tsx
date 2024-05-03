import { configureStore } from "@reduxjs/toolkit";
import { codeCity, stateTicket, userModalType } from "./contextType";
import { definitionsCodeCity } from "./definitionsCodeCity";
import { searchForTickets } from "./searchTickets";
import { userModal } from "./UserModal";

export const { setCityIsWhereFrom, setCityIsWhere, resetCity } =
  definitionsCodeCity.actions;

export const { setDepartData, setReturnData, resetSearch } =
  searchForTickets.actions;

export const { setUserName, setUserPassword } = userModal.actions;

export const reducer = {
  definitionsCity: definitionsCodeCity.reducer,
  searchAirTickets: searchForTickets.reducer,
  userModal: userModal.reducer,
};

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;

export interface AppState {
  definitionsCity: codeCity;
  searchAirTickets: stateTicket;
  userModal: userModalType;
}

export const selectCity = (state: AppState) => state.definitionsCity;
export const selectSearchTicket = (state: AppState) => state.searchAirTickets;
export const selectUserModal = (state: AppState) => state.userModal;
