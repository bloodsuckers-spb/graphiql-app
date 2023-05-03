import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  email: string | null;
  token: string | null;
  id: string | null;
};

const initialState: UserState = {
  email: null,
  token: null,
  id: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(
      state,
      { payload: { email, token, id } }: PayloadAction<NonNullable<UserState>>
    ) {
      state.email = email;
      state.token = token;
      state.id = id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
