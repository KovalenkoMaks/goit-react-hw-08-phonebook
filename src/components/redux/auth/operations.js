import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import swal from 'sweetalert';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = ``;
};
export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('users/signup', userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      swal(`Sorry, this Email has already used `, '', 'warning');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('users/login', userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      swal(
        `Sorry, you enter invalid Email or password. Please check it and try again ;)`,
        '',
        'warning'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/logOut',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/users/logout', userData);
      clearAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  let persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  setAuthHeader(persistedToken);
  try {
    const { data } = await axios.get('/users/current');

    return data;
  } catch (error) {
    clearAuthHeader();
    // persistedToken = null;
    console.log(error);
    return thunkAPI.rejectWithValue();
  }
});
