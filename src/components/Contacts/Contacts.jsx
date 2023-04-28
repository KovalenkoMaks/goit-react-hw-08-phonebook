import PropTypes from 'prop-types';
import { ContactEl, ContactsListEl } from './Contacts.styled';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../redux/contactsSliceAPI';
import { Spinner } from '../Spinner/Spinner';
// import getStoredState from 'redux-persist/es/getStoredState';

export function Contacts() {
  // const currentState = getStoredState();
  // console.log(currentState);
  const [deleteContact, { isLoadingDelete }] = useDeleteContactMutation();
  const filterValue = useSelector(state => state.filter);
  let filteredArr = [];
  const data = [];
  const isLoading = false;
  // const { data, isLoading } = useGetContactsQuery();
  if (data) {
    filteredArr = data.filter(e =>
      e.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
  if (!isLoading && data.length === 0) return <p>You have not contacts yet</p>;
  if (isLoading) return <Spinner />;

  return (
    <>
      <h2>Contacts</h2>
      {filteredArr.length > 0 ? (
        <ContactsListEl>
          {data.map(e => {
            if (!e.name.toLowerCase().includes(filterValue.toLowerCase())) {
              return null;
            }
            return (
              <ContactEl key={e._id}>
                <p>
                  {e.name}: {e.phone}
                </p>
                <p>{e.email}</p>
                <button
                  type="button"
                  onClick={() => {
                    deleteContact(e._id);
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
        <p> No matches found</p>
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
