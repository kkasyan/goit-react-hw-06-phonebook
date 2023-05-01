import css from './item.module.css';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { removeContact } from 'redux/contacts/slice';
import { useDispatch } from 'react-redux';
import { FormButton } from 'components/shared/FormButton/FormButton';

const Item = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
  };

  return (
    <li className={css.item}>
      <p className={css.contactItem}>{name}</p>
      <p className={css.contactItem}>{number}</p>
      <FormButton onRemove={() => onRemoveContact(id)} text="Delete" />
    </li>
  );
};

Item.propTypes = {
  removeContact: PropTypes.func,
};

export default memo(Item);
