import { updateLogPoints } from '../store/reducers/addPoints';
import { axiosInstance } from './index';
// eslint-disable-next-line import/prefer-default-export
export const fetchPoints = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  try {
    const { data } = await axiosInstance.get('/point/log', {
      headers: {
        authorization: token,
      },
    });
    console.log(data);
    dispatch(updateLogPoints(data));
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
  }
};
