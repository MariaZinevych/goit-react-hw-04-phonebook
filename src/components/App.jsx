import { useState, useEffect } from 'react';
import { Phonebook } from './Name/name';

import { GlobalStyle } from 'Global.styled';
import { ContactList } from './Contactlist/contactList';
import { Filter } from './Filter/filter';
import { Toaster, toast } from 'react-hot-toast';

const contact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('phoneContact')) ?? contact
  );
  const [filter, setFilter] = useState('');

  const normalizedFilter = filter.toLocaleLowerCase();
  const visiebleList = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    window.localStorage.setItem('phoneContact', JSON.stringify(contacts));
  }, [contacts]);

  const addQuiz = newQuiz => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === newQuiz.name.toLowerCase()
    );

    if (isInContacts) {
      toast.error(`${newQuiz.name} is already in contacts`);

      return;
    }
    setContacts(prevState => [...prevState, newQuiz]);
  };

  const onChangeFilter = event => {
    setFilter(event.target.value);
  };

  const removeContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Phonebook onAdd={addQuiz} />
      <h2>Contacts</h2>

      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList onValues={visiebleList} onDelete={removeContact} />
      <GlobalStyle />
      <Toaster />
    </>
  );
};
