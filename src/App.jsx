import { useState } from "react";
import "./App.css";
import { ContactList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";
import { ContactForm } from "./components/FormComponent/ContactForm";
import { Section } from "./components/Section/Section";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  const handleAddContact = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    applyFilter(updatedContacts);
  };

  const applyFilter = (contactsList) => {
    const filterValue = filteredContacts.name || "";
    const filtered = contactsList.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onAddContact={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter onFilterChange={applyFilter} />
        <ContactList contacts={filteredContacts} />
      </Section>
    </>
  );
}

export default App;
