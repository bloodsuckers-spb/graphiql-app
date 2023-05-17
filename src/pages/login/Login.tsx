/* eslint-disable import/no-default-export */
import { auth } from 'app/firebase';
import { UserAuth } from 'features/user-auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';

const Login = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/editor');
    }
  }, [user, navigate]);

  return (
    <div className={styles.content}>
      <UserAuth />
    </div>
  );
};

export default Login;
