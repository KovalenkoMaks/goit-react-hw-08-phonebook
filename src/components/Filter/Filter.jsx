import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from '../redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Find contacts by name</h2>
      <FilterInput
        type="text"
        name="filter"
        onChange={e => dispatch(addFilter(e.target.value))}
      />
    </>
  );
}
