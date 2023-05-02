import { useAppSelector } from '../use-app-selector';

export const useAuth = () => {
  const { email, token, id } = useAppSelector((state) => state.userReducer);
  return {
    isAuth: !token,
    email,
    token,
    id,
  };
};
