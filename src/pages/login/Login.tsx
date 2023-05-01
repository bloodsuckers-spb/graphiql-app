/* eslint-disable import/no-default-export */

import { loginSlice } from 'app/providers/StoreProvider/config/reducers';
import { UserAuth } from 'features/user-auth';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/redux';

import styles from './Login.module.scss';

const Login = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    dispatch(loginSlice.actions.signIn());
    localStorage.setItem('isLogin', 'true');
  };
  return (
    <div className={styles.content}>
      <Link
        to="/editor"
        onClick={handleSubmit}
      >
        Submit
      </Link>
      <UserAuth />
    </div>
  );
};

export default Login;
