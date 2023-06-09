import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as burgerMenu } from 'redux-burger-menu';

import { RTKQueryErrorLogger } from 'shared/ui';

import { schemaApi } from './reducers';

import { editorReducer } from './reducers';

const rootReducer = combineReducers({
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
      }).concat(schemaApi.middleware, RTKQueryErrorLogger),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
