import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { toast } from 'react-toastify';
import NumberFormat from 'react-number-format';
import Button from '@material-ui/core/Button';
import LoaderComponent from '../LoaderComponent';
import s from './ContactForm.module.css';
import TextField from '@material-ui/core/TextField';
function ContactForm({ onClose }) {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkRepeatNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      return toast(`${name} is already in the phonebook.`);
    } else if (checkRepeatNumber(number)) {
      return toast(`🤔 ${number} is already in the phonebook.`);
    } else if (checkEmptyQuery(name, number)) {
      return toast.info("Enter the contact's");
    } else {
      dispatch(contactsOperations.addContact(name, number));
    }
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
    onClose();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        color="primary"
        type="text"
        name="name"
        fullWidth
        value={name}
        onChange={handleChange}
        className={s.textField}
      />
      <TextField
        label="Number"
        variant="outlined"
        color="primary"
        type="phone"
        name="number"
        fullWidth
        value={number}
        onChange={handleChange}
        className={s.textField}
      />

      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
}

export default ContactForm;
