import { createSlice } from "@reduxjs/toolkit";
import { codeCity } from "./contextType";
import { fetchDefinitionCodeCity } from "./definitionsRequest";

const initialStateCity: codeCity = {
  cityIsWhereFrom: "",
  cytiIsWhere: "",
  status: "idle",
  codeCityIsWhereFrom: "",
  codeCytiIsWhere: "",
};

const definitionsCodeCity = createSlice({
  name: "codeCity",
  initialState: initialStateCity,
  reducers: {
    setCityIsWhereFrom(state, action) {
      state.cityIsWhereFrom = action.payload;
    },
    setCityIsWhere(state, action) {
      state.cytiIsWhere = action.payload;
    },
    resetCity(state) {
      state.cityIsWhereFrom = "";
      state.codeCityIsWhereFrom = "";
      state.codeCytiIsWhere = "";
      state.cytiIsWhere = "";
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDefinitionCodeCity.pending, (state) => {
      state.status = "loading";
    }),
      builder.addCase(fetchDefinitionCodeCity.fulfilled, (state, action) => {
        state.status = "successed";
        state.codeCityIsWhereFrom = action.payload.isWhereFrom;
        state.codeCytiIsWhere = action.payload.isWhere;
      }),
      builder.addCase(fetchDefinitionCodeCity.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export { initialStateCity, definitionsCodeCity };
