import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filterSlice";
import { contactReducer } from "./reducer";

const store = configureStore({
  reducer: {
    contact: contactReducer,
    filters: filtersReducer,
  },
});

export default store;
