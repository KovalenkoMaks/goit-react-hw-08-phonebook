import { Wrapper } from 'components/App/app.styled';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Wrapper>
      <h1>Welcome to your Phonebook</h1>
      <Header />
      {isLoggedIn ? null : (
        <p>We can help you to order your contacts! Sign up and start Now!</p>
      )}
      <Outlet />
    </Wrapper>
  );
}

export { Home };
