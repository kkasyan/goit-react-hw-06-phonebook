import css from './filter.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { getFilter } from 'redux/filter/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={onSetFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
