import styles from './FormItem.module.scss';

import type { FCProps } from 'app/types';

export const FormItem = ({ children }: FCProps) => (
  <div className={styles.formItem}>{children}</div>
);
