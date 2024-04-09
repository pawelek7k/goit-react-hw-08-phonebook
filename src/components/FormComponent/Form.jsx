import PropTypes from "prop-types";

export const Form = () => {
  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add contact</button>
      </div>
    </>
  );
};

Form.propTypes = {
  nameValueInput: PropTypes.string.isRequired,
  numberValueInput: PropTypes.number.isRequired,
};
