import { createAction, createReducer } from '@reduxjs/toolkit';
import data from '../../db/students.json';

export const initialState = {
  list: data,
  topStudentsList: data,
  searchStudent: '',
  filterStudent: [],
};

export const setStudentList = createAction('student/setList');
export const setTopStudentList = createAction('student/setTopStudentsList');
export const changeSearchStudent = createAction('student/changeSearchStudent');
export const filterAllStudent = createAction('student/filterAllStudent');

const studentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setStudentList, (state, action) => {
      state.list = action.payload;
    })

    .addCase(setTopStudentList, (state, action) => {
      state.topStudentsList = action.payload;
    })

    .addCase(changeSearchStudent, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })

    .addCase(filterAllStudent, (state, action) => {
      state.filterStudent = action.payload;
    });
});

export default studentReducer;
