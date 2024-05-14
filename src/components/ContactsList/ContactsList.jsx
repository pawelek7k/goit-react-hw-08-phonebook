import { useSelector } from "react-redux";
import { getContact } from "../../stores/contacts/selectors";
import ContactListStyles from "./ContactsListStyles";

export const ContactList = () => {
  const contacts = useSelector(getContact);

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
