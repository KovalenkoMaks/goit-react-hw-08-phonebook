import { logOut } from 'components/redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderEl, NavLinkStyled } from './Header.styled';
function Header() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  const handelLogOut = () => {
    dispatch(logOut());
  };
  console.log(isLoggedIn);
  console.log(userName);
  return (
    <HeaderEl>
      <nav>
        <NavLinkStyled to={'/'}>Home</NavLinkStyled>
        {isLoggedIn ? (
          <NavLinkStyled to={'contacts'}>Contacts</NavLinkStyled>
        ) : null}
      </nav>
      <div>
        {isLoggedIn ? (
          <>
            <p>Welcome {userName} ! </p>
            <button type="button" onClick={handelLogOut}>
              Log out
            </button>
          </>
        ) : (
          <>
            <NavLinkStyled to={'/logIn'}>Log In</NavLinkStyled>
            <NavLinkStyled to={'/registration'}>Sign Up</NavLinkStyled>
          </>
        )}
      </div>
    </HeaderEl>
  );
}

export { Header };
