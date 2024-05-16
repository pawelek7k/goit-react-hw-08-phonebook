import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactInitialState = [];

const contactSlice = createSlice({
  name: "contact",
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex((c) => c.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

// const contactReducer = (state = contactInitialState, action) => {
//   switch (action.type) {
//     case "contact/addContact":
//       return [...state, action.payload];
//     case "contact/deleteContact":
//       return state.filter((s) => s.id !== action.payload.id);
//     default:
//       return state;
//   }
// };
// const filtersInitialState = {
//   status: statusFilters.all,
// };

// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   contact: contactReducer,
//   filter: filtersReducer,
// });
