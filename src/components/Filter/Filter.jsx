import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from 'redux/filterSlice';
import { Title, Input } from './Filter.Styled';

export function Filter() {
  const dispatch = useDispatch();
  const search = useSelector(state => state.filterData.search);

  const onSearch = event => {
    const value = event.target.value;
    dispatch(searchContact(value));
  };

  return (
    <div>
      <Title>Find contacts by name:</Title>
      <Input type="text" name="filterTerm" value={search} onChange={onSearch} />
    </div>
  );
}
