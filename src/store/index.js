/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import houseReducer from './reducers/house';

const store = configureStore({
  reducer: {
    user: userReducer,
    house: houseReducer,
  },
});

export default store;
