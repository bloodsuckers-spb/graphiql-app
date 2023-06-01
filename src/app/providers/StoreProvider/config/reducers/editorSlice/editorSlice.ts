import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DEFAULT_URL } from './default';

export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    apiURL: DEFAULT_URL,
    response: '',
    request: '',
    variables: '',
    headers: '',
  },
  reducers: {
    setApiURL(state, action: PayloadAction<string>) {
      state.apiURL = action.payload;
    },
    setResponse(state, action: PayloadAction<string>) {
      state.response = action.payload;
    },
    setRequest(state, action: PayloadAction<string>) {
      state.request = action.payload;
    },
    setVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },
    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
  },
});

export const editorReducer = editorSlice.reducer;
