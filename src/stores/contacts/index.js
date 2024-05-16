import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filterSlice";
import { contactReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filters: filtersReducer,
  },
});
