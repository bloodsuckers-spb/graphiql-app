import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as burgerMenu } from 'redux-burger-menu';

import { userReducer, loginReducer } from './reducers';

const rootReducer = combineReducers({
  userReducer,
  loginReducer,
  burgerMenu,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
