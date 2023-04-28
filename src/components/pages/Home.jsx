import { Wrapper } from 'components/App/app.styled';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  // const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // console.log(isLoggedIn);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/logIn');
  //   }
  // }, [isLoggedIn, navigate]);

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
