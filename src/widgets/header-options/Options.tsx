import { auth } from 'app/firebase';
import { signOut } from 'firebase/auth';
import { useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { action as toggleMenu } from 'redux-burger-menu';
import { useAppDispatch } from 'shared/hooks/redux';

import styles from './Options.module.scss';

export const Options = () => {
  const dispatch = useAppDispatch();
  const user = auth.currentUser;

  const logout = useCallback(() => signOut(auth), []);

  const handleClick = useCallback(
    () => dispatch(toggleMenu(false)),
    [dispatch]
  );

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
          Welcome
        </NavLink>
        {user && (
          <NavLink
            className={({ isActive }) => getActiveClass(isActive)}
            to="/editor"
          >
            Editor
          </NavLink>
        )}
      </nav>
      <div className={styles.options}>
        <div className={styles.localization}>
          <span className={styles.localization__ru}>RU</span>
          <span className={styles.localization__en}>EN</span>
        </div>
        <div className={styles.auth}>
          {user ? (
            <Link
              to="/"
              onClick={logout}
              className={styles.auth}
            >
              Sign out
            </Link>
          ) : (
            <Link
              to="/login"
              className={styles.auth}
            >
              Sign In <span className={styles.auth__slash}> / </span> Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
