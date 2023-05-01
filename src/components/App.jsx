import css from './app.module.css';

import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/selectors';

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <div className={css.wrap}>
      <h1>Phonebook</h1>
      <ContactForm />
      <section className={css.list}>
        <h2 className={css.contactsHeader}>Contacts</h2>
        <Filter />
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <p className={css.noContacts}>Huh... Still no contacts here!</p>
        )}
      </section>
    </div>
  );
};
