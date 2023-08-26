import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, Form, Input, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleOnSubmitForm = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { AddContact } = this.props;

    AddContact({ id: nanoid(), name, number });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleOnSubmitForm}>
        <Label>
          Name
          <Input
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="Your name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          Number
          <Input
            type="tel"
            name="number"
            placeholder="Phone number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}
