import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducers(state, action) {
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
  },
});

// export const addContact = ({ name, number }) => {
//   return {
//     type: "contact/addContact",
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };

// export const deleteContact = (contact, action) => {
//   return {
//     type: "contact/deleteContact",
//     payload: {
//       id,
//     },
//   };
// };

// export const setStatusFilter = (value) => {
//   return {
//     type: "filters/setStatusFilter",
//     payload: value,
//   };
// };
