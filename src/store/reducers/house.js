/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';
import data from '../../db/houses.json';

export const initialState = {
  list: data,
};

export const setHouseList = createAction('house/setList');

const houseReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setHouseList, (state, action) => {
      state.list = action.payload;
    });
});

export default houseReducer;
