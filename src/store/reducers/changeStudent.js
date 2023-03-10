/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  firstname: '',
  lastname: '',
  class_name: '',
  house_id: null,
  score: 0,
  target_id: null,
  successMessage: null,
};

export const changeContentAndValue = createAction('changeStudent/changeContentAndValue');
export const changeHouse = createAction('changeStudent/changeHouse');
export const SuccessMessage = createAction('changeStudent/SuccessMessage');

const changeStudentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeContentAndValue, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(changeHouse, (state, action) => {
      state.house_id = action.payload;
    })

    .addCase(SuccessMessage, (state, action) => {
      state.successMessage = action.payload;
    });
});

export default changeStudentReducer;
