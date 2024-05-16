import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../stores/contacts/actions";
import { getContacts } from "../../stores/contacts/selectors";
import ContactListStyles from "./ContactsListStyles";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  if (!contacts || contacts.length === 0) {
    return <div>No contacts to display</div>;
  }

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
