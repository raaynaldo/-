import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    name: '',
    age: 0,
    email: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
