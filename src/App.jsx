import "./App.css";
import { ContactForm } from "./components/FormComponent/ContactForm";
import { Section } from "./components/Section/Section";
function App() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm></ContactForm>
      </Section>
      <h2>Contacts</h2>
    </>
  );
}

export default App;
