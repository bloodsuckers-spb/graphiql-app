import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.bounding}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <svg className={styles.logo__img}>
              <use href="sprite.svg#logo"></use>
            </svg>
            <h1 className={styles.logo__title}>
              GraphiQL
              <br />
              Clone
            </h1>
          </div>
          <div className={styles.options}>
            <div className={styles.localization}>
              <span className={styles.localization__ru}>RU</span>
              <span className={styles.localization__en}>EN</span>
            </div>
            <div className={styles.auth}>
              <a
                href="/login"
                className={styles.sign__in}
              >
                Sign In
              </a>
              <span className={styles.auth__slash}> / </span>
              <a
                href="/login"
                className={styles.sign__up}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
