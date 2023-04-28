import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import swal from 'sweetalert';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// axios.defaults.baseURL = 'https://goit-node-hw-restapi.onrender.com/api/';
axios.defaults.baseURL = 'http://localhost:3000/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  '/registration',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('users/registration', userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      swal(`Sorry, this Email has already used `, '', 'warning');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('/login', async (userData, thunkAPI) => {
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
});
export const logOut = createAsyncThunk('logOut', async (userData, thunkAPI) => {
  try {
    const res = await axios.post('/users/logout', userData);
    clearAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

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
