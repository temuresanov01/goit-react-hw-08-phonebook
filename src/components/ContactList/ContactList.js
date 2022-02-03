import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

import s from './ContactList.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);

  return (
    <>
      {contacts.length > 0 && (
        <List className={s.list}>
          {visibleContacts.map(({ name, number, id }) => (
            <ListItem key={id}>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircleIcon aria-label="person" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={name} />
              <ListItemText color="primary" primary={number} />
              <ListItemSecondaryAction>
                <IconButton
                  id={id}
                  onClick={() => dispatch(contactsOperations.deleteContact(id))}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
      {contacts.length === 0 && (
        <Typography color="primary" variant="h5">
          There are no contacts in the phone book now
        </Typography>
      )}
    </>
  );
}

export default ContactList;
