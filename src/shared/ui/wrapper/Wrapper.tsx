import styles from './Wrapper.module.scss';

import type { FCProps } from 'app/types';

export const Wrapper = ({ children, direction }: FCProps) => (
  <div className={styles.bounding}>
    <div
      className={styles.inner}
      style={{ flexDirection: direction }}
    >
      {children}
    </div>
  </div>
);
