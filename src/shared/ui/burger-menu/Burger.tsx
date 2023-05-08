import { MenuContext, MenuContextProvider } from 'app/providers';
import { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';

import { Options } from 'widgets/header-options';

import styles from './Burger.module.scss';

export const Burger = () => {
  const context = useContext(MenuContext);

  return (
    <Menu
      right
      width={200}
      className={styles.wrap}
      burgerButtonClassName={styles.button}
      burgerBarClassName={styles.bars}
      menuClassName={styles.menu}
      itemListClassName={styles.item__list}
      overlayClassName={styles.overlay}
      isOpen={context.isMenuOpen}
      onStateChange={(state) => context.stateChangeHandler(state)}
    >
      <Options />
    </Menu>
  );
};
