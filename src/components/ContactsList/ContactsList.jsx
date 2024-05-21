import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../stores/contacts/contactsSlice";
import { getContacts, getFilters } from "../../stores/contacts/selectors";
import ContactListStyles from "./ContactsListStyles";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filters = useSelector(getFilters);

  return (
    <ContactListStyles>
      <ul>
        {contacts
          .filter(
            (c) =>
              c.name.includes(filters.searchBy) ||
              c.number.includes(filters.searchBy)
          )
          .map((contact) => (
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
