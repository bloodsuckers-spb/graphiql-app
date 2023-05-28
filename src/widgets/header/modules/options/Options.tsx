import Switch from '@mui/material/Switch';

import { auth } from 'app/firebase';
import { Palette } from 'app/providers/ThemeProvider';
import { signOut } from 'firebase/auth';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { action as toggleMenu } from 'redux-burger-menu';

import { useAppDispatch } from 'shared/hooks/redux';

import { classNames } from 'shared/libs';

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

  const [checked, setChecked] = useState(
    localStorage.getItem('i18nextLng') === 'ru-RU' ||
      localStorage.getItem('i18nextLng') === 'ru'
  );

  const handleChecked = () => {
    setChecked((prev) => !prev);
    changeLanguage();
  };

  const changeLanguage = () => {
    !checked ? i18n.changeLanguage('ru') : i18n.changeLanguage('en');
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
          <div className={styles.langCheckedBox}>
            <span>en</span>
            <Palette>
              <Switch
                checked={checked}
                onClick={handleChecked}
                color="secondary"
                size="medium"
              />
            </Palette>
            <span>ru</span>
          </div>
        </div>
        <div className={classNames(styles.auth, {}, [styles.authLinkBox])}>
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
