import { loginSlice } from 'app/providers/StoreProvider/config/reducers';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'shared/hooks/redux';

import { classNames } from 'shared/libs';
import { Wrapper, AppLogo } from 'shared/ui';
import { Burger } from 'shared/ui/burger-menu';
import { Options } from 'widgets/header-options';

import styles from './Header.module.scss';

export const Header = () => {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.loginReducer.value);

  const [isSticky, setSticky] = useState(false);

  const headerRef = useRef(null);

  const signOut = () => {
    dispatch(loginSlice.actions.signOut());
    window.localStorage.setItem('isLogin', 'false');
  };

  const getActiveClass = (isActive: boolean) => {
    return isActive
      ? `${styles.nav__link} ${styles.nav__link_active}`
      : `${styles.nav__link}`;
  };

  const handleScroll = (elTopOffset: number, elHeight: number) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    const header = (
      headerRef?.current as unknown as HTMLElement
    ).getBoundingClientRect();

    window.addEventListener('scroll', () =>
      handleScroll(header.top, header.height)
    );

    return () => {
      window.removeEventListener('scroll', () =>
        handleScroll(header.top, header.height)
      );
    };
  }, []);

  return (
    <header
      className={
        isSticky
          ? classNames(styles.header, {}, [styles.headerActive])
          : styles.header
      }
      ref={headerRef}
    >
      <Wrapper className={styles.inner__header}>
        <div className={styles.logo}>
          <AppLogo />
          <h1 className={styles.logo__title}>
            GraphiQL
            <br />
            Clone
          </h1>
        </div>
        <div className={styles.menu__desktop}>
          <Options />
        </div>
        <Burger />
      </Wrapper>
    </header>
  );
};
