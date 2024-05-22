import { statusFilters } from "./constants";

export const selectContacts = (state) => state.contacts.item;

export const selectFilters = (state) => state.filters.searchBy;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const searchByContact = (state) => {
  const contacts = selectContacts(state);
  const searchTerm = selectFilters(state);

  switch (searchTerm) {
    case statusFilters.all:
      return contacts.filter(
        (c) => c.name.includes(searchTerm) || c.number.includes(searchTerm)
      );
    default:
      return contacts;
  }
};
