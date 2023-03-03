/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';
import data from '../../db/houses.json';

export const initialState = {
  list: data,
  sortedList: [],
};

export const setHouseList = createAction('house/setList');
export const sortHouseList = createAction('house/sortHouseList');

const houseReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setHouseList, (state, action) => {
      state.list = action.payload;
    })
    .addCase(sortHouseList, (state, action) => {
      state.sortedList = action.payload;
    });
});

export default houseReducer;
