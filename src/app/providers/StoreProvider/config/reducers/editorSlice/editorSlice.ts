import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { defaultSchema, defaultURL } from './default';
// import { GraphQLSchema, buildClientSchema } from 'graphql';

export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    apiURL: defaultURL,
    schema: defaultSchema,
    response: '',
    request: '',
  },
  reducers: {
    setApiURL(state, action: PayloadAction<string>) {
      state.apiURL = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setSchema(state, action: PayloadAction<any>) {
      state.schema = action.payload;
    },
    setResponse(state, action: PayloadAction<string>) {
      state.response = action.payload;
    },
    setRequest(state, action: PayloadAction<string>) {
      state.request = action.payload;
    },
  },
});

export const editorReducer = editorSlice.reducer;
