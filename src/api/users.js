/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
import jwt from 'jwt-decode';
import { handleLogged, sendErrorMessage, sendSuccessMessage } from '../store/reducers/user';
import { axiosInstance } from './index';
import { setUserList } from '../store/reducers/adminUser';

// eslint-disable-next-line import/prefer-default-export
export const login = () => async (dispatch, getState) => {
  const state = getState();
  const { email, password } = state.user;

  try {
    await axiosInstance.post('auth', {
      email,
      password,
    })
      .then((response) => {
        const { token } = response.data.result;
        const user = jwt(token);
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.result.token}`;
        dispatch(handleLogged({
          ...user,
          token,
        }));
        return response.data.result;
      });
  }
  catch (e) {
    dispatch(sendErrorMessage('Votre mot de passe ou votre email est incorrect'));
    console.log('Errorus Console-logus!!!', e);
  }
};

export const fetchUsers = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  console.log(token);

  try {
    const { data } = await axiosInstance.get('admin/user', {
      headers: {
        token,
      },
    });
    dispatch(setUserList(data));
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
  }
};

export const addUser = () => async (dispatch, getState) => {
  const state = getState();
  const {
    lastname, firstname, email, password, role_id, user_id,
  } = state.adminUser;
  console.log(role_id);
  try {
    await axiosInstance.post('admin/user', {
      lastname,
      firstname,
      email,
      password,
      role_id,
      user_id,
    });
    dispatch(fetchUsers());
  }
  catch (e) {
    console.log(e);
  }
};

export const deleteUser = () => async (dispatch, getState) => {
  const state = getState();
  const {
    target_id,
  } = state.adminUser;
  console.log(target_id);
  try {
    await axiosInstance.delete(`admin/user/${target_id}`);
    dispatch(fetchUsers());
  }
  catch (e) {
    console.log(e);
  }
};

export const changePassword = () => async (dispatch, getState) => {
  const state = getState();
  const {
    id, oldPassword, newPassword, confirmation,
  } = state.user;
  const password = newPassword;
  console.log(id);
  try {
    await axiosInstance.patch(`user/${id}`, {
      oldPassword,
      password,
      confirmation,
    });
    dispatch(sendSuccessMessage('Votre mot de passe a bien été modifié.'));
  }
  catch (e) {
    console.log(e);
  }
};

export const changeInfoUser = () => async (dispatch, getState) => {
  const state = getState();
  const {
    id, firstname, lastname, email, role_id,
  } = state.changeUserInfo;
  console.log(id);
  try {
    await axiosInstance.patch(`admin/user/${id}`, {
      firstname,
      lastname,
      email,
      role_id,
    });
    dispatch(fetchUsers());
  }
  catch (e) {
    console.log(e);
  }
};
