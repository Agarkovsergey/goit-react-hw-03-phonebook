const CONTACTS_KEY = 'contacts';

export const saveContacts = (contacts) => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
}

export const readContacts = () => {
  try {
    const contacts = localStorage.getItem(CONTACTS_KEY);

    return contacts === null ? [] : JSON.parse(contacts);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};