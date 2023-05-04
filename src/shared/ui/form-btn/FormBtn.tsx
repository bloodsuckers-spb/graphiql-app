import { MouseEventHandler } from 'react';

import styles from './FormBtn.module.scss';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const FormBtn = () => (
  <button
    className={styles.btn}
    type="submit"
  >
    Enter
  </button>
);
