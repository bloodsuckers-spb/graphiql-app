import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.bounding}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img
              className={styles.logo__img}
              src="apple-touch-icon.png"
              alt="GraphiQL Logo"
            />
            <p className={styles.logo__title}>GraphiQL Clone</p>
          </div>
          <div className={styles.options}>
            <div className={styles.localization}>
              <span className={styles.localization__ru}>RU</span>
              <span className={styles.localization__en}>EN</span>
            </div>
            <div className={styles.auth}>
              <span className={styles.sign__in}>Sign In</span>
              <span> / </span>
              <span className={styles.sign__up}>Sign Up</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
