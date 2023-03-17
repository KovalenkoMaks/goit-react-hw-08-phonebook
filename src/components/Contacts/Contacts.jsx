import PropTypes from 'prop-types';
import { ContactEl, ContactsListEl } from './Contacts.styled';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../redux/contactsSliceAPI';
import { Spinner } from '../Spinner/Spinner';

export function Contacts() {
  const { data, isLoading } = useGetContactsQuery();
  const [deleteContact, { isLoadingDelete }] = useDeleteContactMutation();
  const filterValue = useSelector(state => state.filter);
  if (isLoading) return <Spinner />;
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2>Contacts</h2>
          {data.length > 0 ? (
            <ContactsListEl>
              {data.map(e => {
                if (!e.name.toLowerCase().includes(filterValue.toLowerCase())) {
                  return null;
                }
                return (
                  <ContactEl key={e.id}>
                    <p>
                      {e.name}: {e.number}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        deleteContact(e.id);
                      }}
                      disabled={isLoadingDelete}
                    >
                      Delete
                    </button>
                    {/* <button type="button" onClick={() => {}}>
                    Edit
                  </button> */}
                  </ContactEl>
                );
              })}
            </ContactsListEl>
          ) : (
            <p>You have not contacts yet</p>
          )}
        </>
      )}
    </>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
