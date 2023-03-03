/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  content: '',
  value: '',
  house_id: '',
  student_id: '',
  user_id: null,
  successMessage: null,
};

export const changeContentAndValue = createAction('addPoints/changeContentAndValue');
export const selectHouse = createAction('addPoints/selectHouse');
export const selectStudent = createAction('addPoints/selectStudent');
export const changeUser = createAction('addPoints/changeUser');
export const sendSuccessMessage = createAction('addPoints/sendSuccessMessage');
export const resetForm = createAction('addPoints/resetForm');

const addPointsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeContentAndValue, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(selectHouse, (state, action) => {
      state.house_id = action.payload;
    })
    .addCase(selectStudent, (state, action) => {
      state.student_id = action.payload;
    })
    .addCase(changeUser, (state, action) => {
      state.user_id = action.payload;
    })
    .addCase(sendSuccessMessage, (state, action) => {
      state.successMessage = action.payload;
    })
    .addCase(resetForm, (state) => {
      state.content = '';
      state.value = '';
    });
});

export default addPointsReducer;
