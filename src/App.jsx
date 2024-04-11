import { useState } from "react";
import "./App.css";
import { ContactList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";
import { ContactForm } from "./components/FormComponent/ContactForm";
import { Section } from "./components/Section/Section";
function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  return (
    <>
      <Section title="Phonebook">
        <ContactForm onAddContact={handleAddContact}></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList contacts={contacts}></ContactList>
      </Section>
    </>
  );
}

export default App;
