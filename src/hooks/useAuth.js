import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../components/redux/selectors/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);
  //   const user = useSelector(selectUser);

  return {
    isLoggedIn,
    // isRefreshing,
    // user,
  };
};
