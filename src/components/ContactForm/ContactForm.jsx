import css from './contactForm.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { FormButton } from 'components/shared/FormButton/FormButton';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/slice';

const ContactForm = () => {
  const [state, setState] = useState({ name: '', number: '' });
  const { name, number } = state;

  const dispatch = useDispatch();

  const onAddContact = payload => {
    const action = addContact(payload);
    dispatch(action);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ ...state });
    reset();
  };

  const handleChange = e => {
    const { value, name } = e.currentTarget;

    setState({
      ...state,
      [name]: value,
    });
  };

  const reset = () => {
    setState({
      name: '',
      number: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name">
        Name
        <input
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Z0-9_.\-]+[\\\|\s]?[a-zA-Z0-9_.\-]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          name="number"
          value={number}
          onChange={handleChange}
          pattern="[0-9.\-]*"
          title="Phone number must be digits and can contain dashes, parentheses"
          required
        />
      </label>
      <FormButton type="submit" text="Add contact" />
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default memo(ContactForm);
