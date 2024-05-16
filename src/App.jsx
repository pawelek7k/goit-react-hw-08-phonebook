import { useEffect, useState } from "react";
import "./App.css";
import { ContactList } from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import { ContactForm } from "./components/FormComponent/ContactForm";
import { Section } from "./components/Section/Section";

function App() {
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    applyFilter(filteredContacts, filter);
  }, [filter]);

  const applyFilter = (contactsList, filterValue) => {
    if (!Array.isArray(contactsList)) {
      return;
    }

    const filtered = contactsList.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        contact.number.includes(filterValue)
    );

    setFilteredContacts(filtered);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter onFilterChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} filter={filter} />
      </Section>
    </>
  );
}

export default App;
