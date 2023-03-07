/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  errorMessage: '',
  isLogged: false,
  email: '',
  password: '',
  firstname: '',
  token: '',
  id: '',
  oldPassword: '',
  newPassword: '',
  confirmation: '',
  confirmMessage: '',
  ...JSON.parse(localStorage.getItem('user')),
};

export const changeEmailAndPassword = createAction('user/userData');
export const handleLogged = createAction('user/handleLogged');
export const setLogged = createAction('user/setLogged');
export const sendErrorMessage = createAction('user/sendErrorMessage');
export const logout = createAction('user/logout');
export const changeNewPassword = createAction('user/changeNewPassword');
export const sendSuccessMessage = createAction('user/sendSuccessMessage');
export const resetForm = createAction('user/resetForm');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeEmailAndPassword, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(handleLogged, (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      Object.assign(state, action.payload);
    })
    .addCase(setLogged, (state, action) => {
      state.logged = action.payload.value;
    })
    .addCase(logout, (state) => {
      state.isLogged = false;
      state.token = null;
      state.password = null;
      state.email = null;
      state.firstname = null;
      localStorage.clear();
    })
    .addCase(sendErrorMessage, (state, action) => {
      state.errorMessage = action.payload;
    })
    .addCase(changeNewPassword, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(sendSuccessMessage, (state, action) => {
      state.confirmMessage = action.payload;
    })
    .addCase(resetForm, (state) => {
      state.oldPassword = '';
      state.newPassword = '';
      state.confirmation = '';
    });
});

export default userReducer;
