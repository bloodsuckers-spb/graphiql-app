import { auth } from 'app/firebase';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserAuthField, AppLogo } from 'shared/ui';

import styles from './UserAuth.module.scss';

import { UserAuthForm } from '..';

enum UsersAuth {
  LOGIN = 'Log In',
  SIGNUP = 'Sign Up',
}

export const UserAuth = () => {
  const user = auth.currentUser;
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/editor');
    }
  }, [user, navigate]);

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
