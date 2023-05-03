import styles from './Wrapper.module.scss';

import type { FCProps } from 'app/types';

export const Wrapper = ({ children }: FCProps) => (
  <div className={styles.bounding}>
    <div className={styles.inner}>{children}</div>
  </div>
);
