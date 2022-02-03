import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';

import TextField from '@material-ui/core/TextField';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);

  return (
    <>
      {contacts.length > 0 && (
        <TextField
          label="Filter"
          variant="outlined"
          type="text"
          value={filter}
          fullWidth
          color="primary"
          onChange={e =>
            dispatch(contactsActions.filterContact(e.target.value))
          }
        />
      )}
    </>
  );
}

export default Filter;
