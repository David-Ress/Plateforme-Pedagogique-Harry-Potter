/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  firstname: '',
  lastname: '',
  class_name: '',
  house_id: 2,
  user_id: null,
  score: 'Score',
  studentList: [],
  target_id: null,
  filterStudentAdmin: [],
};

export const changeContentAndValue = createAction('adminStudent/changeContentAndValue');
export const changeHouse = createAction('adminStudent/changeHouse');
export const changeUser = createAction('adminStudent/changeUser');
export const resetForm = createAction('adminStudent/resetForm');
export const setAdminStudentList = createAction('adminStudent/setAdminStudentList');
export const changeTargetId = createAction('adminStudent/changeTargetId');
export const filterAllStudentAdmin = createAction('adminStudent/filterAllStudentAdmin');

const adminStudentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeContentAndValue, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(changeHouse, (state, action) => {
      state.house_id = action.payload;
    })
    .addCase(changeUser, (state, action) => {
      state.user_id = action.payload;
    })
    .addCase(resetForm, (state) => {
      state.firstname = '';
      state.lastname = '';
      state.class_name = '';
      state.house_id = 2;
      state.score = 'Score';
    })
    .addCase(setAdminStudentList, (state, action) => {
      state.studentList = action.payload;
    })
    .addCase(changeTargetId, (state, action) => {
      state.target_id = action.payload;
    })
    .addCase(filterAllStudentAdmin, (state, action) => {
      state.filterStudentAdmin = action.payload;
    });
});

export default adminStudentReducer;
