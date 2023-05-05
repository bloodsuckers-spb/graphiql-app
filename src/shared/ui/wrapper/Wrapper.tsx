import { classNames } from 'shared/libs';

import styles from './Wrapper.module.scss';

import type { FCProps } from 'app/types';

type Props = {
  className: string;
};

export const Wrapper = ({ className, children }: FCProps & Props) => (
  <div className={styles.bounding}>
    <div className={classNames(styles.inner, {}, [className])}>{children}</div>
  </div>
);
