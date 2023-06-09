/* eslint-disable no-useless-escape */
import { auth } from 'app/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { classNames } from 'shared/libs';
import { UserAuthField } from 'shared/ui';

import { Props, FormFields } from './types';

import styles from './UserAuthForm.module.scss';

export const UserAuthForm = ({ isSignUp }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  const { t } = useTranslation();

  const signIn = async ({ email, password }: FormFields) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (error instanceof Error) {
        reset();
        toast(error.message);
      }
    }
  };

  const signUp = async ({ email, password }: FormFields) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (error instanceof Error) {
        reset();
        toast(error.message);
      }
    }
  };

  const isEmailValid = (email: string) => {
    return /^\S{2,}@\S{2,}\.\S{2,}$/.test(email);
  };

  const isPasswordValid = (password: string) => {
    if (password.length < 8 || password.length > 20) return false;
    if (!/\d/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (/\s/.test(password)) return false;
    return /[!@#$%^&()+=[\]{};':"|,.<>\/?_-]/.test(password);
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
          className={classNames(styles.input, {}, [
            errors.email ? styles.errorInput : '',
          ])}
          type="text"
          placeholder={`${t('formEmail')}`}
          autoComplete="off"
          autoFocus={true}
          {...register('email', { validate: isEmailValid })}
        />
        {errors.email && (
          <span className={styles.error}>{t('formErrorEmail')}</span>
        )}
      </UserAuthField>
      <UserAuthField>
        <input
          className={classNames(styles.input, {}, [
            errors.password ? styles.errorInput : '',
          ])}
          type="password"
          placeholder={`${t('formPassword')}`}
          autoComplete="off"
          {...register('password', { validate: isPasswordValid })}
        />
        {errors.password && (
          <span className={styles.error}>{t('formErrorPassword')}</span>
        )}
      </UserAuthField>
      <button
        className={styles.btn}
        type="submit"
      >
        {t('formEnter')}
      </button>
    </form>
  );
};
