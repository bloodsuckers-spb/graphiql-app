import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    apiURL: '',
    response: '',
    request: '',
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
  },
});

export const editorReducer = editorSlice.reducer;
