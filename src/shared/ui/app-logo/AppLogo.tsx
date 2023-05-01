import styles from './AppLogo.module.scss';

export const AppLogo = () => (
  <svg className={styles.logo}>
    <use href="sprite.svg#logo"></use>
  </svg>
);
