import PropTypes from "prop-types";
import ContactListStyles from "./ContactsListStyles";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListStyles>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <div>
              <span> {contact.name} </span>
              <span> {contact.number}</span>
            </div>

            <button onClick={() => onDeleteContact(contact.id)}>
              <span> Delete contact</span>
            </button>
          </li>
        ))}
      </ul>
    </ContactListStyles>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
