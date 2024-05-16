import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setSearchBy(state, action) {
      state.searchBy = action.payload;
    },
  },
});

export const { setStatusFilter, setSearchBy } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
