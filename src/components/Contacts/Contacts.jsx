import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { Item, Title, Button, Span } from './Contacts.Styled';

export function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsData.contacts);
  const search = useSelector(state => state.filterData.search);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const filterContact = contacts.filter(el =>
    el.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <ul>
      {filterContact.map(({ name, id, tel }) => {
        return (
          <Item key={id}>
            <Span />
            <Title>
              {name}: {tel}
            </Title>
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </ul>
  );
}
