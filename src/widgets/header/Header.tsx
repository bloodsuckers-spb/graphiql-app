import { useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/libs';
import { Wrapper, AppLogo, Burger } from 'shared/ui';

import { Options } from 'widgets/header-options';

import styles from './Header.module.scss';

export const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const handleScroll = (elTopOffset: number, elHeight: number) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    if (!headerRef || !headerRef.current) {
      return;
    }

    const header = headerRef.current.getBoundingClientRect();

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
