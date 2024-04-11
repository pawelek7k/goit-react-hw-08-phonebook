import "./App.css";
import { ContactList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";
import { ContactForm } from "./components/FormComponent/ContactForm";
import { Section } from "./components/Section/Section";
function App() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList></ContactList>
      </Section>
    </>
  );
}

export default App;
