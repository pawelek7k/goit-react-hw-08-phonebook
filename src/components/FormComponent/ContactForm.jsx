import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../stores/contacts/reducer";
import FormStyles from "./FormStyles";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const loginInputId = nanoid();

  const numberInputLabelId = nanoid();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || number.trim() === "") return;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    setName("");
    setNumber("");
  };

  return (
    <FormStyles>
      <form onSubmit={handleSubmit}>
        <label htmlFor={loginInputId}>
          Name
          <input
            id={loginInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={handleNameChange}
            value={name}
            required
          />
        </label>
        <label htmlFor={numberInputLabelId}>
          Number
          <input
            type="tel"
            name="number"
            id={numberInputLabelId}
            pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
            onChange={handleNumberChange}
            value={number}
            required
          />
        </label>
        <button type="submit">
          <span>Add contact</span>
        </button>
      </form>
    </FormStyles>
  );
};
