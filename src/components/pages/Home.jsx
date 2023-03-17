import { Wrapper } from 'components/App/app.styled';
import { Header } from 'components/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // console.log(isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/logIn');
    }
  }, [isLoggedIn, navigate]);

  return (
    <Wrapper>
      <h1>Welcome to your Phonebook</h1>
      <Header />

      <Outlet />
    </Wrapper>
  );
}

export { Home };
