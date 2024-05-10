import ContactsForm from "./components/ContactsForm/ContactsForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

function App() {
    return (
        <div>
            <h1 className="title">Phonebook</h1>
            <ContactsForm />
            <SearchBox />
            <ContactList />
        </div>
    );
}

export default App;
