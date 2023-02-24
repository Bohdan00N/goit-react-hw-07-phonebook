import css from './contactList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getContacts, getFilter } from 'redux/selector';


const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterGet = useSelector(getFilter);
  const findContacts = (contacts, filter) => {
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
    }
  };
  
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  const findContact = findContacts(contacts, filterGet);
  
  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {findContact.map((cont) => (
          <li key = {cont.id} className={css.contactListItem}>
            {cont.name}: {cont.phone}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => handleDelete(cont.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
