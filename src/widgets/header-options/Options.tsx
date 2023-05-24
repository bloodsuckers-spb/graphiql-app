import { auth } from 'app/firebase';
import { signOut } from 'firebase/auth';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { action as toggleMenu } from 'redux-burger-menu';
import { useAppDispatch } from 'shared/hooks/redux';

import styles from './Options.module.scss';

export const Options = () => {
  const dispatch = useAppDispatch();
  const user = auth.currentUser;

  const logout = useCallback(() => signOut(auth), []);

  const { t, i18n } = useTranslation();

  const handleClick = useCallback(
    () => dispatch(toggleMenu(false)),
    [dispatch]
  );

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const getActiveClass = (isActive: boolean) => {
    return isActive
      ? `${styles.nav__link} ${styles.nav__link_active}`
      : `${styles.nav__link}`;
  };

  return (
    <div
      className={styles.menu}
      onClick={handleClick}
    >
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) => getActiveClass(isActive)}
          to="/"
        >
          {t('navPageWelcome')}
        </NavLink>
        {user && (
          <NavLink
            className={({ isActive }) => getActiveClass(isActive)}
            to="/editor"
          >
            {t('navPageEditor')}
          </NavLink>
        )}
      </nav>
      <div className={styles.options}>
        <div className={styles.localization}>
          <span
            onClick={() => changeLanguage('ru')}
            className={styles.localization__ru}
          >
            RU
          </span>
          <span
            onClick={() => changeLanguage('en')}
            className={styles.localization__en}
          >
            EN
          </span>
        </div>
        <div className={styles.auth}>
          {user ? (
            <Link
              to="/"
              onClick={logout}
              className={styles.auth}
            >
              {t('SignOut')}
            </Link>
          ) : (
            <Link
              to="/login"
              className={styles.auth}
            >
              {t('signIn')}
              <span className={styles.auth__slash}> / </span>
              {t('signUp')}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
