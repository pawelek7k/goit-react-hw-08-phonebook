import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./reducer";

const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;
