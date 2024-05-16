import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../stores/contacts/reducer";
import { getContacts } from "../../stores/contacts/selectors";
import ContactListStyles from "./ContactsListStyles";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <ContactListStyles>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <div>
              <span>{contact.name}</span>
              <span>{contact.number}</span>
            </div>

            <button onClick={() => dispatch(deleteContact(contact.id))}>
              <span>Delete contact</span>
            </button>
          </li>
        ))}
      </ul>
    </ContactListStyles>
  );
};
