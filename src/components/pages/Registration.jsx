import { FormEl } from 'components/NameInput/NameInput.styled';
import { register } from 'components/redux/auth/operations';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { H2El } from './Registration.styled';
const initialValues = {
  name: '',
  email: '',
  password: '',
};

function Registration() {
  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <H2El>Create you Account</H2El>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormEl>
          <label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              placeholder="Name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="email">
            Email
            <Field
              type="email"
              name="email"
              placeholder="Email"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <Field
              type="password"
              name="password"
              placeholder="Password"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </FormEl>
      </Formik>
    </>
  );
}

export { Registration };
