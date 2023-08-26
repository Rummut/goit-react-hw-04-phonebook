import { Component } from 'react';
import { ContactList } from './contact-list/ContactList';
import { ContactForm } from './contact-form/ContactForm';
import { Filters } from './filters/Flters';
import { Container, Title, TitleContact } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';

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

  componentDidMount = () => {
    const savedContacts = localStorage.getItem('array-contacts')
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts)
      })
    }
}

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('array-contacts', JSON.stringify(this.state.contacts))
    }
}

  handleContactsAdd = newContact => {
    const { contacts } = this.state;
    const { name } = newContact;
    const isNameContain = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (isNameContain) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
  };

  handleDelete = listDeleteId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== listDeleteId
        ),
      };
    });
  };

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm AddContact={this.handleContactsAdd}></ContactForm>
        <TitleContact>Contacts</TitleContact>
        <Filters value={filter} onChange={this.changeFilter}></Filters>
        <ContactList
          contacts={visibleContacts}
          onDelete={this.handleDelete}
        ></ContactList>
        <GlobalStyle />
      </Container>
      
    );
  }
}
