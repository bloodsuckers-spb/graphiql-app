import { loginSlice } from 'app/providers/StoreProvider/config/reducers';
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'shared/hooks/redux';

import { Wrapper, AppLogo } from 'shared/ui';

import styles from './Header.module.scss';

export const Header = () => {
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
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.logo}>
          <AppLogo />
          <h1 className={styles.logo__title}>
            GraphiQL
            <br />
            Clone
          </h1>
        </div>
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) => getActiveClass(isActive)}
            to="/"
          >
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
      </Wrapper>
    </header>
  );
};
