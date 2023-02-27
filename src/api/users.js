import { saveUserInfos } from '../store/reducers/user';
import { axiosInstance } from './index';

// eslint-disable-next-line import/prefer-default-export
export const login = () => async (dispatch, getState) => {
  const state = getState();
  const { email, password } = state.user.userData;

  try {
    const { data } = await axiosInstance.post('/login', {
      email,
      password,
    });

    axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;

    dispatch(saveUserInfos(data));
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
  }
};
