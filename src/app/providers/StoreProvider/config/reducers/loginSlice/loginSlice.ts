import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'test',
  initialState: {
    value: localStorage.getItem('isLogin')
      ? localStorage.getItem('isLogin') === 'true'
      : false,
  },
  reducers: {
    signIn(state) {
      state.value = true;
    },

    signOut(state) {
      state.value = false;
    },
  },
});

export const loginReducer = loginSlice.reducer;
