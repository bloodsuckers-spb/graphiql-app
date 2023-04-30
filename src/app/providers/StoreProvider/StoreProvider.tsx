import { Provider } from 'react-redux';

import { setupStore } from './config/store';

import type { FCProps } from 'app/types';

export const StoreProvider = ({ children }: FCProps) => (
  <Provider store={setupStore()}>{children}</Provider>
);
