import styles from './AuthForm.module.scss';

import type { FCProps } from 'app/types';

export const AuthForm = ({ children }: FCProps) => (
  <form className={styles.form}>{children}</form>
);
