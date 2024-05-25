import { setFilter } from 'components/redux/filterSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
export const Filter = () => {
  const dispatch = useDispatch();

  const changeHandler = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <div className={css.primary}>
      <div className={css.container}>
        <label className={css.label}>Find contacts by Name</label>
        <div>
          <input
            className={css.input}
            type="text"
            name="filter"
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};