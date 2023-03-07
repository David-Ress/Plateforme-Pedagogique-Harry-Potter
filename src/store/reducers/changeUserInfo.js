/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  role_id: null,
  password: '',
  successMessage: null,
};

export const saveUserId = createAction('changeUserInfo/saveUserId');
export const saveUserFirstname = createAction('changeUserInfo/saveUserFirstname');
export const saveUserLastname = createAction('changeUserInfo/saveUserLastname');
export const saveUserEmail = createAction('changeUserInfo/saveUserEmail');
export const saveUserRoleId = createAction('changeUserInfo/saveUserRoleId');
export const changeUserInfo = createAction('changeUserInfo/changeUserInfo');
export const changeRole = createAction('changeUserInfo/changeRole');
export const SuccessMessage = createAction('changeUserInfo/SuccessMessage');

const changeUserInfoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(saveUserId, (state, action) => {
      state.id = action.payload;
    })

    .addCase(saveUserFirstname, (state, action) => {
      state.firstname = action.payload;
    })

    .addCase(saveUserLastname, (state, action) => {
      state.lastname = action.payload;
    })

    .addCase(saveUserEmail, (state, action) => {
      state.email = action.payload;
    })

    .addCase(saveUserRoleId, (state, action) => {
      state.role_id = action.payload;
    })

    .addCase(changeUserInfo, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })

    .addCase(changeRole, (state, action) => {
      state.role_id = action.payload;
    })

    .addCase(SuccessMessage, (state, action) => {
      state.successMessage = action.payload;
    });
});

export default changeUserInfoReducer;
