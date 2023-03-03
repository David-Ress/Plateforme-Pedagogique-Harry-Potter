/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import houseReducer from './reducers/house';
import studentReducer from './reducers/student';
import addPointsReducer from './reducers/addPoints';
import adminUserReducer from './reducers/adminUser';
import adminStudentReducer from './reducers/adminStudent';
import changeStudentReducer from './reducers/changeStudent';
import changeUserInfoReducer from './reducers/changeUserInfo';

const store = configureStore({
  reducer: {
    user: userReducer,
    house: houseReducer,
    student: studentReducer,
    addPoints: addPointsReducer,
    adminUser: adminUserReducer,
    adminStudent: adminStudentReducer,
    changeStudent: changeStudentReducer,
    changeUserInfo: changeUserInfoReducer,
  },
});

export default store;
