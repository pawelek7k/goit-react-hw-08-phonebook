import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactInitialState = [];

const contactSlice = createSlice({
  name: "contact",
  initialState: contactInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex((c) => c.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = contactSlice.actions;
export const contactReducer = createSlice.reducer;

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
