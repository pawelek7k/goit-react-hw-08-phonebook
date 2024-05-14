import { nanoid } from "nanoid";

export const addContact = (name, number) => {
  return {
    type: "contact/addContact",
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};
