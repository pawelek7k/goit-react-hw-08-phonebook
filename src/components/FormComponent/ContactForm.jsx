import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useState } from "react";

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    onAddContact(newContact);
    setName("");
    setNumber("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleNameChange} value={name} />
      <input type="tel" onChange={handleNumberChange} value={number} />
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
