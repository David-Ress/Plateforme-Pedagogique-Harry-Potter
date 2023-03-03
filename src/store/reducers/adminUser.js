/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  role_id: 2,
  user_id: null,
  userList: [],
  target_id: null,
};

export const changeContentAndValue = createAction('adminUser/changeContentAndValue');
export const changeRole = createAction('adminUser/changeRole');
export const changeUser = createAction('adminUser/changeUser');
export const setUserList = createAction('adminUser/setUserList');
// export const selectHouse = createAction('addPoints/selectHouse');
// export const selectStudent = createAction('addPoints/selectStudent');
// export const sendSuccessMessage = createAction('addPoints/sendSuccessMessage');
export const resetForm = createAction('adminUser/resetForm');
export const changeTargetId = createAction('adminUser/changeTargetId');

const adminUserReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeContentAndValue, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(changeRole, (state, action) => {
      state.role_id = action.payload;
    })
    .addCase(changeUser, (state, action) => {
      state.user_id = action.payload;
    })
    .addCase(setUserList, (state, action) => {
      state.userList = action.payload;
    })
    .addCase(resetForm, (state) => {
      state.firstname = '';
      state.lastname = '';
      state.password = '';
      state.role_id = 2;
    })
    .addCase(changeTargetId, (state, action) => {
      state.target_id = action.payload;
    });
});

export default adminUserReducer;
