import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selector';
import css from './filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChangeFilter = (e) => {
  dispatch(setFilter(e.target.value));
  
  }

  return (
    <div>
      <label className={css.label}>Find contacts by Name</label>
      <input
        className={css.input}
        type="text"
        name="filter"
        placeholder="Filter"
        value={filter}
        onChange={handleChangeFilter}
      ></input>
    </div>
  );
};
