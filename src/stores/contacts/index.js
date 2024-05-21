import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;
