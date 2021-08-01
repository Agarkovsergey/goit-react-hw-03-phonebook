import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  onSubmit = (e) => {
      e.preventDefault()
    
    const contact = {
      name: this.state.name,
      number: this.state.number,
    }
    this.props.createContact(contact);
    this.setState({
      name: '',
      number: ''
    })
  }

  onInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.onInputChange}
        />
        <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.onInputChange}
        />
        <button type='submit'>Add contact</button>
    </form>
    );
  }
}

export default ContactForm;