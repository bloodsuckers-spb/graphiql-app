import { auth } from 'app/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { useForm, SubmitHandler } from 'react-hook-form';

import { UserAuthField, FormBtn } from 'shared/ui';

import { Props, FormFields } from './types';

import styles from './UserAuthForm.module.scss';

export const UserAuthForm = ({ isSignUp }: Props) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormFields>();

  const signIn = async ({ email, password }: FormFields) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const signUp = async ({ email, password }: FormFields) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const isEmailValid = (email: string) => {
    return /^\S+@\S+.\S+$/.test(email);
  };

  const isPasswordValid = (password: string) => {
    if (password.length < 8 || password.length > 20) return false;
    if (!/\d/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    // добавить проверку на спецсимволы
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    isSignUp ? signUp(data) : signIn(data);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <UserAuthField>
        <input
          className={styles.input}
          type="email"
          placeholder="E-mail"
          autoFocus={true}
          autoComplete="off"
          {...register('email', { validate: isEmailValid })}
        />
      </UserAuthField>
      <UserAuthField>
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          autoComplete="off"
          {...register('password', { validate: isPasswordValid })}
        />
      </UserAuthField>
      <FormBtn />
    </form>
  );
};
