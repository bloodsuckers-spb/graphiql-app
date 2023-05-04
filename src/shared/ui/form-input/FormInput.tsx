import { forwardRef } from 'react';
import { ForwardedRef } from 'react';

import styles from './FormInput.module.scss';

type Props = {
  type: 'email' | 'password';
};

export const FormInput = forwardRef(
  ({ type }: Props, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      type={type}
      className={styles.input}
      ref={ref}
    />
  )
);
