/* eslint-disable camelcase */
import { axiosInstance } from './index';
import { setHouseList, sortHouseList } from '../store/reducers/house';
import { sendSuccessMessage } from '../store/reducers/addPoints';
// eslint-disable-next-line import/prefer-default-export
export const fetchHouses = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get('house/total-score');
    dispatch(setHouseList(data));
    dispatch(sortHouseList(data));
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
  }
};

export const addPointHouses = () => async (dispatch, getState) => {
  const state = getState();
  const {
    value, content, user_id, house_id,
  } = state.addPoints;
  const { token } = state.user;

  try {
    await axiosInstance.post('point/add', {
      house_id,
      value,
      content,
      user_id,
    }, {
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        console.log(response);
        dispatch(sendSuccessMessage('Vos points ont bien été ajoutés.'));
        dispatch(fetchHouses());
        setTimeout(() => {
          dispatch(sendSuccessMessage());
        }, 5000);
      });
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
    console.log(state.addPoints);
  }
};

export const removePointHouses = () => async (dispatch, getState) => {
  const state = getState();
  const {
    value, content, user_id, house_id,
  } = state.addPoints;
  const { token } = state.user;

  try {
    await axiosInstance.post('point/remove', {
      house_id,
      value,
      content,
      user_id,
    }, {
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        console.log(response);
        dispatch(sendSuccessMessage('Vos points ont bien été enlevés.'));
        dispatch(fetchHouses());
        setTimeout(() => {
          dispatch(sendSuccessMessage());
        }, 5000);
      });
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
    console.log(state.addPoints);
  }
};
