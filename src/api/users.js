/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
import jwt from 'jwt-decode';
import { handleLogged, sendErrorMessage, sendSuccessMessage } from '../store/reducers/user';
import { axiosInstance } from './index';
import { setUserList } from '../store/reducers/adminUser';
import { SuccessMessage } from '../store/reducers/changeUserInfo';

// eslint-disable-next-line import/prefer-default-export
export const login = () => async (dispatch, getState) => {
  const state = getState();
  const { password } = state.user;
  const email = state.user.email.toLowerCase();

  try {
    await axiosInstance.post('auth', {
      email,
      password,
    })
      .then((response) => {
        const { token } = response.data;
        const user = jwt(token);
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        dispatch(handleLogged({
          ...user,
          token,
        }));
        return response.data;
      });
  }
  catch (e) {
    dispatch(sendErrorMessage('Votre mot de passe ou votre email est incorrect'));
    setTimeout(() => {
      dispatch(sendErrorMessage());
    }, 5000);
    console.log('Errorus Console-logus!!!', e);
  }
};

export const fetchUsers = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  try {
    const { data } = await axiosInstance.get('admin/user', {
      headers: {
        authorization: token,
      },
    });
    dispatch(setUserList(data));
  }
  catch (e) {
    console.log('Errorus Console-logus!!! Tu ne peux pas récupérer les users!', e);
  }
};

export const addUser = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  const {
    lastname, firstname, email, password, role_id, user_id,
  } = state.adminUser;

  try {
    await axiosInstance.post('admin/user', {
      lastname,
      firstname,
      email,
      password,
      role_id,
      user_id,
    }, {
      headers: {
        authorization: token,
      },
    });
    dispatch(fetchUsers());
    dispatch(SuccessMessage("L'utilisateur a bien été ajouté"));
    setTimeout(() => {
      dispatch(SuccessMessage());
    }, 5000);
  }
  catch (e) {
    console.log(e);
  }
};

export const deleteUser = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  const {
    target_id,
  } = state.adminUser;

  try {
    await axiosInstance.delete(`admin/user/${target_id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(fetchUsers());
    dispatch(SuccessMessage("L'utilisateur a bien été supprimé"));
    setTimeout(() => {
      dispatch(SuccessMessage());
    }, 5000);
  }
  catch (e) {
    console.log(e);
  }
};

export const changePassword = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  const {
    id, oldPassword, newPassword, confirmation,
  } = state.user;
  const password = newPassword;

  try {
    await axiosInstance.patch(`user/${id}`, {
      oldPassword,
      password,
      confirmation,
    }, {
      headers: {
        authorization: token,
      },
    });

    dispatch(sendSuccessMessage('Votre mot de passe a bien été modifié.'));
    setTimeout(() => {
      dispatch(sendSuccessMessage());
    }, 5000);
  }
  catch (e) {
    console.log(e);
  }
};

export const changeInfoUser = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  const {
    id, firstname, lastname, email, role_id,
  } = state.changeUserInfo;

  try {
    await axiosInstance.patch(`/admin/user/${id}`, {
      firstname,
      lastname,
      email,
      role_id,
    }, {
      headers: {
        authorization: token,
      },
    });
    dispatch(fetchUsers());
    dispatch(SuccessMessage("Les informations de l'utilisateur ont bien été modifiées."));
    setTimeout(() => {
      dispatch(SuccessMessage());
    }, 5000);
  }
  catch (e) {
    console.log(e);
  }
};

export const changeUserPassword = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  const {
    id, password,
  } = state.changeUserInfo;
  try {
    await axiosInstance.patch(`admin/user/password/${id}`, {
      password,
    }, {
      headers: {
        authorization: token,
      },
    });
    dispatch(fetchUsers());
    dispatch(SuccessMessage("Le mot de passe de l'utilisateur a bien été modifié."));
    setTimeout(() => {
      dispatch(SuccessMessage());
    }, 5000);
  }
  catch (e) {
    console.log(e);
  }
};
