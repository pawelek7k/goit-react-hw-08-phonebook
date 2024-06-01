import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { ContactList } from "../components/ContactsList/ContactsList";
import { ContactForm } from "../components/FormComponent/ContactForm";
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
      <ContactForm />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}
