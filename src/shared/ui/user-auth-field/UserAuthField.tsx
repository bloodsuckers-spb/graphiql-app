import styles from './UserAuthField.module.scss';

import type { FCProps } from 'app/types';

export const UserAuthField = ({ children }: FCProps) => (
  <div className={styles.userAuthField}>{children}</div>
);
