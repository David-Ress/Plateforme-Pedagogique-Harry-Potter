/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  logged: false,
  userData: {
    email: '',
    password: '',
    role: null,
    token: null,
  },
};

export const changeEmailAndPassword = createAction('user/userData');
export const changeLoggedStatus = createAction('user/logged');
export const changeLoggedMessage = createAction('user/loggedMessage');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeEmailAndPassword, (state, action) => {
      state.userData[action.payload.key] = action.payload.value;
    });
});

export default userReducer;
