// import { IsLoggedIn } from 'components/redux/selectors/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  //   console.log(isLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

// export const RestrictedRouteForUnloggedUser = ({
//   component: Component,
//   redirectTo,
// }) => {
//   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
//   //   console.log(isLoggedIn);
//   return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
// };
