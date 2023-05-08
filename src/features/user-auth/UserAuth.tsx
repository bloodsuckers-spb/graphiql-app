import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { Auth } from 'firebase/auth';
import { useState } from 'react';

import { UserAuthField, AppLogo } from 'shared/ui';

import styles from './UserAuth.module.scss';

import { UserAuthForm } from '..';

enum UsersAuth {
  LOGIN = 'Log In',
  SIGNUP = 'Sign Up',
}

const signIn = (email: string, password: string, auth: Auth) =>
  signInWithEmailAndPassword(auth, email, password);

const signUp = (email: string, password: string, auth: Auth) =>
  createUserWithEmailAndPassword(auth, email, password);

export const UserAuth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
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
