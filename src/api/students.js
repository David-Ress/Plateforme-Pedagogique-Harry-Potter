/* eslint-disable no-console */
/* eslint-disable camelcase */
import { axiosInstance } from './index';
import { setStudentList, setTopStudentList } from '../store/reducers/student';
import { setAdminStudentList } from '../store/reducers/adminStudent';
import { sendSuccessMessage } from '../store/reducers/addPoints';

// eslint-disable-next-line import/prefer-default-export
export const fetchStudents = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  try {
    const { data } = await axiosInstance.get('/student/total-score-and-house', {
      headers: {
        authorization: token,
      },
    });
    // Dispatch à créer dans le reducer:
    dispatch(setStudentList(data));
  }
  catch (e) {
    console.log('Dommage, ça n\'a pas marché', e);
  }
};

export const fetchAdminStudents = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  try {
    const { data } = await axiosInstance.get('/student', {
      headers: {
        authorization: token,
      },
    });
    // Dispatch à créer dans le reducer:
    dispatch(setAdminStudentList(data));
    console.log(data);
  }
  catch (e) {
    console.log('Dommage, ça n\'a pas marché', e);
  }
};

export const fetchTopStudents = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get('/student/top5');
    // Dispatch à créer dans le reducer:
    dispatch(setTopStudentList(data));
    // console.log(data);
  }
  catch (e) {
    console.log('Dommage, ça n\'a pas marché', e);
  }
};

export const addPointStudents = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  const { value, content, user_id } = state.addPoints;
  const { student_id } = state.addPoints;

  try {
    await axiosInstance.post('point/add', {
      headers: {
        authorization: token,
      },
      student_id,
      value,
      content,
      user_id,
    })
      .then(() => {
        dispatch(sendSuccessMessage("Vos points à l'élève ont bien été ajoutés."));
        dispatch(fetchStudents());
        dispatch(fetchAdminStudents());
        dispatch(fetchTopStudents());
        setTimeout(() => {
          dispatch(sendSuccessMessage());
        }, 5000);
      });
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
  }
};

export const removePointStudents = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  const { value, content, user_id } = state.addPoints;
  const { student_id } = state.addPoints;

  try {
    await axiosInstance.post('point/remove', {
      value,
      content,
      user_id,
      student_id,
    }, {
      headers: {
        authorization: token,
      },
    })
      .then(() => {
        dispatch(sendSuccessMessage("Vos points à l'élève ont bien été enlevés."));
        dispatch(fetchStudents());
        dispatch(fetchAdminStudents());
        dispatch(fetchTopStudents());
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

export const addStudent = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  const {
    lastname, firstname, class_name, user_id, house_id, score,
  } = state.adminStudent;
  console.log(house_id);
  try {
    await axiosInstance.post('admin/student', {
      lastname,
      firstname,
      class_name,
      user_id,
      house_id,
      score,
    }, {
      headers: {
        authorization: token,
      },
    });
    dispatch(fetchAdminStudents());
    dispatch(fetchStudents());
    dispatch(fetchTopStudents());
  }
  catch (e) {
    console.log(e);
  }
};

export const deleteStudent = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  const {
    target_id,
  } = state.adminStudent;
  try {
    await axiosInstance.delete(`admin/student/${target_id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(fetchAdminStudents());
    dispatch(fetchStudents());
    dispatch(fetchTopStudents());
  }
  catch (e) {
    console.log(e);
  }
};

export const editStudent = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  const {
    lastname, firstname, class_name, house_id, score, target_id,
  } = state.changeStudent;
  const { user_id } = state.user.id;
  try {
    await axiosInstance.patch(`admin/student/${target_id}`, {
      lastname,
      firstname,
      class_name,
      house_id,
      score,
      user_id,
    }, {
      headers: {
        authorization: token,
      },
    });
    dispatch(fetchAdminStudents());
    dispatch(fetchStudents());
    dispatch(fetchTopStudents());
  }
  catch (e) {
    console.log(e);
  }
};
