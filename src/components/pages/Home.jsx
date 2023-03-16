import { Wrapper } from 'components/App/app.styled';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <Wrapper>
      <h1>Welcome to your Phonebook</h1>
      <Header />

      <Outlet />
    </Wrapper>
  );
}

export { Home };
