import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.bounding}>
      <div className={styles.inner}>Hello Header</div>
    </div>
  </header>
);
