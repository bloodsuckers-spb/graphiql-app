import { auth } from 'app/firebase';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

import { UserAuthField, AppLogo } from 'shared/ui';

import styles from './UserAuth.module.scss';

import { UserAuthForm } from '..';

enum UsersAuth {
  LOGIN = 'Log In',
  SIGNUP = 'Sign Up',
}

export const UserAuth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/');
  }, [user, loading, navigate]);
  return (
    <div className={styles.userAuth}>
      <div className={styles.userAuthHeading}>
        <AppLogo />
        <UserAuthField>
          <div className={styles.userAuthRadios}>
            <input
              className={styles.userAuthRadio}
              id="radio-login"
              type="radio"
              name="user-auth"
              value={UsersAuth.LOGIN}
              defaultChecked
              onClick={() => setIsSignUp(!isSignUp)}
            />
            <label
              className={styles.userAuthLabel}
              htmlFor="radio-login"
            >
              {UsersAuth.LOGIN}
            </label>
            <input
              className={styles.userAuthRadio}
              id="radio-signup"
              type="radio"
              name="user-auth"
              value={UsersAuth.SIGNUP}
              onClick={() => setIsSignUp(!isSignUp)}
            />
            <label
              className={styles.userAuthLabel}
              htmlFor="radio-signup"
            >
              {UsersAuth.SIGNUP}
            </label>
          </div>
        </UserAuthField>
      </div>
      <UserAuthForm isSignUp={isSignUp} />
    </div>
  );
};
