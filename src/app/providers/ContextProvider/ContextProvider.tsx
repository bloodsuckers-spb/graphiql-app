import {
  useState,
  createContext,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from 'react';
import { State } from 'react-burger-menu';

type Menu = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  stateChangeHandler: (arg0: State) => void;
};

const defaultMenuState = {
  isMenuOpen: false,
  toggleMenu: () => {
    console.log('toggle');
  },
  stateChangeHandler: () => {
    console.log('handler');
  },
};

export const MenuContext = createContext<Menu>(defaultMenuState);

export const MenuContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  const [menuOpenState, setMenuOpenState] = useState(false);
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};
