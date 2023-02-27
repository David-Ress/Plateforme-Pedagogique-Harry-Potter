import { createAction, createReducer } from '@reduxjs/toolkit';
import data from '../../db/students.json';

export const initialState = {
  list: data,
};

export const setStudentList = createAction('student/setList');

const studentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setStudentList, (state, action) => {
      state.list = action.payload;
    });
});

export default studentReducer;
