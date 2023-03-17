import { FormEl } from 'components/NameInput/NameInput.styled';
import { logIn } from 'components/redux/auth/operations';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { H2El } from './Registration.styled';
import { useEffect } from 'react';
// import { contactsApi } from 'components/redux/contactsSliceAPI';
import { clearUser } from 'components/redux/auth/authSlice';
// import { contactsApi } from 'components/redux/contactsSliceAPI';
const initialValues = {
  email: '',
  password: '',
};

function LogIn() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(set);
  // }, []);

  const handleSubmit = async values => {
    dispatch(logIn(values));
  };
  return (
    <>
      <H2El>Log in to PhoneBook</H2El>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormEl>
          <label htmlFor="email">
            Email
            <Field
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="true"
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

          <button type="submit">Log In</button>
        </FormEl>
      </Formik>
    </>
  );
}

export { LogIn };
