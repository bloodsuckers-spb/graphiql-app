import { FormEvent } from 'react';

import styles from './AuthForm.module.scss';

import type { FCProps } from 'app/types';

type Props = {
  onSubmit: (event: FormEvent) => void;
} & FCProps;

export const AuthForm = ({ onSubmit, children }: Props) => (
  <form
    className={styles.form}
    onSubmit={onSubmit}
  >
    {children}
  </form>
);
