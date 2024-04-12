import { nanoid } from "nanoid";
import { useState } from "react";
import "./App.css";
import { ContactList } from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import { ContactForm } from "./components/FormComponent/ContactForm";
import { Section } from "./components/Section/Section";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const handleAddContact = (newContact) => {
    const updatedContacts = [...contacts, { ...newContact, id: nanoid() }];
    setContacts(updatedContacts);
    applyFilter(updatedContacts);
  };

  const applyFilter = (contactsList) => {
    const filtered = contactsList.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    applyFilter(contacts);
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onAddContact={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter onFilterChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} />
      </Section>
    </>
  );
}

export default App;
