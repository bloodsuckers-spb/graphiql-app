import { auth } from 'app/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { FormEvent, useRef } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import { UserAuthField, FormBtn, FormInput } from 'shared/ui';

import styles from './UserAuthFrom.module.scss';

type Props = {
  isSignUp: boolean;
};

export const UserAuthForm = ({ isSignUp }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault();
    signIn('vtlk.spb@gmail.com', 'test');
  };

  const handleSignUp = (event: FormEvent) => {
    event.preventDefault();
    signUp('vtlk.spb@gmail.com', 'test');
  };

  return (
    <form
      className={styles.form}
      onSubmit={isSignUp ? handleSignUp : handleSignIn}
    >
      <UserAuthField>
        <FormInput
          type="email"
          ref={emailRef}
        />
      </UserAuthField>
      <UserAuthField>
        <FormInput
          type="password"
          ref={passwordRef}
        />
      </UserAuthField>
      <FormBtn />
    </form>
  );
};
