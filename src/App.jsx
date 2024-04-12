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
    const isDuplicate = contacts.some(
      (contact) => contact.number === newContact.number
    );

    if (isDuplicate) {
      alert("Kontakt o tej nazwie już istnieje w książce telefonicznej!");
      return;
    }
    const updatedContacts = [...contacts, { ...newContact, id: nanoid() }];
    setContacts(updatedContacts);
    applyFilter(updatedContacts, filter);
  };

  const applyFilter = (contactsList, filterValue) => {
    let filtered = contactsList;
    if (filterValue && filterValue.trim() !== "") {
      filtered = contactsList.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          contact.number.includes(filterValue)
      );
    }
    setFilteredContacts(filtered);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    applyFilter(contacts, value);
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
