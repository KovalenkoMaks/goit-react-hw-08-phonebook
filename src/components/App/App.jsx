import { Route, Routes } from 'react-router-dom';
import { Home } from 'components/pages/Home';
import { Registration } from 'components/pages/Registration';
import { LogIn } from 'components/pages/LogIn';
import { ContactsPage } from 'components/pages/ContactsPage';
import { useEffect } from 'react';
import { RestrictedRoute } from 'components/utils/RestrictedRout';
import { PrivateRoute } from 'components/utils/PrivateRout';
import { useDispatch } from 'react-redux';
import { refresh } from 'components/redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/logIn"
            element={
              <RestrictedRoute component={LogIn} redirectTo={'/contacts'} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo={'/logIn'} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
