import "./App.css";
import { ContactList } from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import { ContactForm } from "./components/FormComponent/ContactForm";
import { Navigation } from "./components/Navigation/Navigation";
import { Section } from "./components/Section/Section";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}

export default App;
