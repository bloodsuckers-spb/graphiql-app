import { Link } from 'react-router-dom';

import styles from './AppLogo.module.scss';

export const AppLogo = () => (
  <Link to={'/'}>
    <svg className={styles.logo}>
      <use href="sprite.svg#logo"></use>
    </svg>
  </Link>
);
