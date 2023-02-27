import { axiosInstance } from './index';
import { setHouseList } from '../store/reducers/house';
// eslint-disable-next-line import/prefer-default-export
export const fetchHouses = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get('house');
    console.log(data);
    dispatch(setHouseList(data));
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
  }
};
