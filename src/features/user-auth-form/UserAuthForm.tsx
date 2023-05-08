import { auth } from 'app/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { useForm, SubmitHandler } from 'react-hook-form';

import { UserAuthField, FormBtn } from 'shared/ui';

import styles from './UserAuthForm.module.scss';

type Props = {
  isSignUp: boolean;
};

type FormFields = {
  email: string;
  password: string;
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
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
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
          {...register('email')}
        />
      </UserAuthField>
      <UserAuthField>
        <input
          className={styles.input}
          type="password"
          {...register('password')}
        />
      </UserAuthField>
      <FormBtn />
    </form>
  );
};
