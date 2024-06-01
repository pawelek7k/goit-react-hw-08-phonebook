import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { ContactsEditor } from "../components/ContactsEditor/ContactsEditor";
import { ContactList } from "../components/ContactsList/ContactsList";
import { fetchContacts } from "../stores/contacts/api";
import { selectIsLoading } from "../stores/contacts/selectors";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <ContactsEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}
