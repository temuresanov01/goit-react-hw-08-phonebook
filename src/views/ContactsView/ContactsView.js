import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import Typography from '@material-ui/core/Typography';
import Filter from '../../components/Filter';
import { contactsOperations } from '../../redux/contacts';
import s from './ContactsView.module.css';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Modal from '../../components/Modal/Modal';
export default function ContactsView() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Container className={s.wrapper} maxWidth="xs">
      <Typography className={s.title} color="primary" variant="h3">
        Contacts
      </Typography>
      <Filter />
      <ContactList />
      <IconButton
        onClick={toggleModal}
        className={s.add}
        color="primary"
        aria-label="add contact"
      >
        <AddIcon />
      </IconButton>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </Container>
  );
}
