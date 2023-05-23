import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DefaultSchema, DefaultURL } from './default';

export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    apiURL: DefaultURL,
    schema: DefaultSchema,
    response: '',
    request: '',
    variables: '',
    headers: '',
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
    setVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },
    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
  },
});

export const editorReducer = editorSlice.reducer;
