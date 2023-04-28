import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { useAddContactMutation } from '../redux/contactsSliceAPI';
import { useGetContactsQuery } from '../redux/contactsSliceAPI';

import { FormEl } from './NameInput.styled';
import { useSelector } from 'react-redux';

const initialValues = {
  name: '',
  email: '',
  phone: '',
};

export function NameInput() {
  const [addContact] = useAddContactMutation();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // console.log(isLoggedIn);
  const data = [];
  if (!isLoggedIn) {
  }
  // const { data } = useGetContactsQuery();
  const handleSubmit = async (values, { resetForm }) => {
    let check = data.find(
      e => e.name.toLowerCase() === values.name.toLowerCase()
    );
    if (check === undefined) {
      resetForm();
      try {
        await addContact(values);
      } catch (error) {
        console.log(error);
      }
    } else {
      swal(`"${values.name}" is already in contacts`, '', 'warning');
    }
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormEl>
          <label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="email">
            Email
            <Field
              type="email"
              name="email"
              placeholder="email"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="phone">
            Number
            <Field
              type="tel"
              name="phone"
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </FormEl>
      </Formik>
    </>
  );
}

NameInput.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
