/* eslint-disable import/no-default-export */
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks/redux';

import Login from './Login';

const LoginPrivate = () => {
  const isLogin = useAppSelector((state) => state.loginReducer.value);
  return <>{isLogin ? <Navigate to={'/'} /> : <Login />}</>;
};

export default LoginPrivate;
