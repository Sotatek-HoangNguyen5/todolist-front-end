import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    signined(state, action: PayloadAction<string>) {
      localStorage.setItem('jwt', action.payload);
    },
    signout(state) {
      localStorage.removeItem('jwt');
    },
  },
});

export const { signined, signout } = userSlice.actions;
export default userSlice.reducer;
