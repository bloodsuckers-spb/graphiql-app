import { auth } from 'app/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { useForm, SubmitHandler } from 'react-hook-form';

import { UserAuthField, FormBtn } from 'shared/ui';

import { Props, FormFields } from './types';

import styles from './UserAuthForm.module.scss';

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

export const UserAuthForm = ({ isSignUp }: Props) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormFields>();

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
          {...register('email')}
        />
      </UserAuthField>
      <UserAuthField>
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          {...register('password')}
        />
      </UserAuthField>
      <FormBtn />
    </form>
  );
};
