import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GraphQLSchema } from 'graphql';

export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    apiURL: 'https://rickandmortyapi.com/graphql',
    schema: {},
    response: '',
    request: '',
  },
  reducers: {
    setApiURL(state, action: PayloadAction<string>) {
      state.apiURL = action.payload;
    },
    setSchema(state, action: PayloadAction<GraphQLSchema>) {
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
