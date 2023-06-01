import styles from './UserAuthField.module.scss';

import type { FCProps } from 'app/types';

export const UserAuthField = ({ children }: FCProps) => {
  return <div className={styles.userAuthField}>{children}</div>;
};
