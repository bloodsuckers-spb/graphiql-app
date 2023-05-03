/* eslint-disable import/no-default-export */

import { UserAuth } from 'features/user-auth';

import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.content}>
      <UserAuth />
    </div>
  );
};

export default Login;