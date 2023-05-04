import { Input } from 'antd';

import styles from './FormInput.module.scss';

type Props = {
  type: 'email' | 'password';
};

export const FormInput = ({ type }: Props) => (
  <Input
    type={type}
    className={styles.input}
  />
);
