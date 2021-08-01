import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ContactForm from './components/contactForm/ContactForm'
import ContactList from './components/contactList/ContactList'
import Filter from './components/filter/Filter'

import { saveContacts, readContacts } from './utils/localStorage.helpers'


class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  setContacts = (contacts) => {
    this.setState({
      contacts
    });
    saveContacts(contacts)
  }

  createContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number
    }

    const foundContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    
    if (foundContact) {
      alert(`${name} is already in contacts`);
      return
    }
    
    this.setContacts([
      ...this.state.contacts,
      contact
    ]);
  }

  onFilterChange = ({ target }) => {
    this.setState({
      filter: target.value
    });
  }

  deleteContact = ({ target }) => {
    const id = target.id.split(':')[1];

    this.setContacts(
      this.state.contacts.filter(
        contact => contact.id !== id
      ),
    );
  }

  

  componentDidMount() {
    const contacts = readContacts();

    this.setState({
      contacts
    })
  }

  render() {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className="wrapper">
        <h2 className="lessonHeader">Phonebook</h2>
        <ContactForm
          createContact={this.createContact}
        />
        <h2 className="lessonHeader">Contacts</h2>
        <Filter handleChange={this.onFilterChange} filter={this.state.filter}/>
        <ContactList contacts={filteredContacts} handleDelete={ this.deleteContact }/>
      </div>
    );
  }
}

export default App;
