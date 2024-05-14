import { combineReducers } from "redux";
import { statusFilters } from "./constants";

const contactInitialState = [];

const contactReducer = (state = contactInitialState, action) => {
  switch (action.type) {
    case "contact/addContact":
      return [...state, action.payload];
    default:
      return state;
  }
};
const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contact: contactReducer,
  filter: filtersReducer,
});
