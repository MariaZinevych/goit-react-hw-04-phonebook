import { Component } from 'react';
import { Phonebook } from './Name/name';

import { GlobalStyle } from 'Global.styled';
import { ContactList } from './Contactlist/contactList';
import { Filter } from './Filter/filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedFilter = localStorage.getItem('phoneContact');
    if (savedFilter !== null) {
      this.setState({ contacts: JSON.parse(savedFilter) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('phoneContact', JSON.stringify(this.state.contacts));
    }
  }

  addQuiz = newQuiz => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newQuiz.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${newQuiz.name} is already in contacts`);

      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newQuiz],
      };
    });
  };

  onChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const visiebleList = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <h1>Phonebook</h1>
        <Phonebook onAdd={this.addQuiz} />
        <h2>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.onChangeFilter} />
        <ContactList onValues={visiebleList} onDelete={this.removeContact} />
        <GlobalStyle />
      </>
    );
  }
}
