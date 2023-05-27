import { action as toggleMenu } from 'redux-burger-menu';
import { useAppSelector, useAppDispatch } from 'shared/hooks/redux';
import { Options } from 'widgets/header-options';

import styles from './Burger.module.scss';
import { Menu } from './BurgerRedux';

type MenuReducer = { isOpen: boolean };

export const Burger = () => {
  const isOpen = useAppSelector((state) => {
    const reducer = state.burgerMenu as MenuReducer;
    return reducer.isOpen;
  });
  const dispatch = useAppDispatch();

  return (
    <Menu
      right
      width={'65%'}
      maxWidth={400}
      className={styles.wrap}
      burgerButtonClassName={styles.button}
      burgerBarClassName={styles.bars}
      menuClassName={styles.menu}
      itemListClassName={styles.item__list}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      onStateChange={(state: MenuReducer) => {
        dispatch(toggleMenu(state.isOpen));
      }}
    >
      <Options />
    </Menu>
  );
};
