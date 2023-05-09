import { loginSlice } from 'app/providers/StoreProvider/config/reducers';
import { Link, NavLink } from 'react-router-dom';
import { action as toggleMenu } from 'redux-burger-menu';
import { useAppSelector, useAppDispatch } from 'shared/hooks/redux';

import styles from './Options.module.scss';

export const Options = () => {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.loginReducer.value);

  const signOut = () => {
    dispatch(loginSlice.actions.signOut());
    window.localStorage.setItem('isLogin', 'false');
  };

  const getActiveClass = (isActive: boolean) => {
    return isActive
      ? `${styles.nav__link} ${styles.nav__link_active}`
      : `${styles.nav__link}`;
  };

  return (
    <div
      className={styles.menu}
      onClick={() => dispatch(toggleMenu(false))}
    >
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) => getActiveClass(isActive)}
          to="/"
        >
          Welcome
        </NavLink>
        {isLogin && (
          <NavLink
            className={({ isActive }) => getActiveClass(isActive)}
            to={'/editor'}
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
          {isLogin ? (
            <Link
              to="/"
              onClick={signOut}
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
