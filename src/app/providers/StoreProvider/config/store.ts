import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { testReducer, loginReducer } from './reducers';

const rootReducer = combineReducers({
  testReducer,
  loginReducer,
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
