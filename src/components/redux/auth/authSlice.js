import { logIn, logOut, refresh, register } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {},
  extraReducers: builder =>
    builder
      //Registration
      .addCase(register.pending, (state, action) => {
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        return state;
      })
      // Log in
      .addCase(logIn.pending, (state, action) => {
        return state;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {})
      // LogOut
      // .addCase(logOut.pending, (state, action) => {
      //   return state;
      // })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      // .addCase(logOut.rejected, (state, action) => {
      //   return state;
      // })
      // Refresh
      .addCase(refresh.pending, (state, action) => {
        state.isRefreshing = true;
        return state;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.user = { name: null, email: null };
      }),
});

export default authSlice.reducer;
export const { clearUser } = authSlice.actions;
