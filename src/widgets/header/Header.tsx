import { Wrapper, AppLogo } from 'shared/ui';
import { Burger } from 'shared/ui/burger-menu';
import { Options } from 'widgets/header-options';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
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
