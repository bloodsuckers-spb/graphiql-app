import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as burgerMenu } from 'redux-burger-menu';

import { schemaApi } from './reducers';

import { userReducer, loginReducer, editorReducer } from './reducers';

const rootReducer = combineReducers({
  userReducer,
  loginReducer,
  editorReducer,
  burgerMenu,
  [schemaApi.reducerPath]: schemaApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(schemaApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
