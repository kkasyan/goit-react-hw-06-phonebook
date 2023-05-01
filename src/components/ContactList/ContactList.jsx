import css from './contactList.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Item from './Item/Item';
import { getFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const elements = contacts.map(item => <Item key={item.id} contact={item} />);
  return (
    <>
      <ul className={css.list}>{elements}</ul>
    </>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

ContactList.defaultProps = { items: [] };
