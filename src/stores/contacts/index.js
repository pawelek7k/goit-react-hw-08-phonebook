import { configureStore } from "@reduxjs/toolkit";
import { ContactList } from "../../components/ContactsList/ContactsList";
import Filter from "../../components/Filter/Filter";

export const store = configureStore({
  reducer: {
    contacts: ContactList,
    filters: Filter,
  },
});
