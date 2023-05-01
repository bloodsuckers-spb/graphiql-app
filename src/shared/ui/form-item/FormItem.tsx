import { ReactNode } from 'react';

import styles from './FormItem.module.scss';

type Props = {
  children: ReactNode;
};

export const FormItem: React.FC<Props> = ({ children }) => (
  <div className={styles.formItem}>{children}</div>
);
