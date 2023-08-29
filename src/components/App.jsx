import { useEffect, useState } from 'react';
import { ContactList } from './contact-list/ContactList';
import { ContactForm } from './contact-form/ContactForm';
import { Filters } from './filters/Flters';
import { Container, Title, TitleContact } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('array-contacts')) ?? initialState;
  });
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('array-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleContactsAdd = newContact => {
    const { name } = newContact;
    const isNameContain = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameContain) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts(prevState => [...contacts, newContact]);
  };

  const handleDelete = listDeleteId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== listDeleteId)
    );
  };

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm AddContact={handleContactsAdd}></ContactForm>
      <TitleContact>Contacts</TitleContact>
      <Filters value={filter} onChange={changeFilter}></Filters>
      <ContactList
        contacts={visibleContacts}
        onDelete={handleDelete}
      ></ContactList>
      <GlobalStyle />
    </Container>
  );
};
