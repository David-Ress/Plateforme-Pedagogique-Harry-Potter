/* eslint-disable no-console */
/* eslint-disable camelcase */
import { axiosInstance } from './index';
import { setStudentList, setTopStudentList } from '../store/reducers/student';
import { setAdminStudentList } from '../store/reducers/adminStudent';
import { fetchHouses } from './houses';
import { sendSuccessMessage } from '../store/reducers/addPoints';
import { SuccessMessage } from '../store/reducers/changeStudent';

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
    dispatch(setAdminStudentList(data));
  }
  catch (e) {
    console.log('Dommage, ça n\'a pas marché', e);
  }
};

export const fetchTopStudents = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get('/student/top5');
    dispatch(setTopStudentList(data));
  }
  catch (e) {
    console.log('Dommage, ça n\'a pas marché', e);
  }
};

export const addPointStudents = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  const {
    value, content, user_id, student_id,
  } = state.addPoints;
  console.log(content);
  console.log(value);
  try {
    await axiosInstance.post('point/add', {
      student_id,
      value,
      content,
      user_id,
    }, {
      headers: {
        authorization: token,
      },
    })
      .then(() => {
        dispatch(sendSuccessMessage("Vos points à l'élève ont bien été ajoutés."));
        dispatch(fetchStudents());
        dispatch(fetchHouses());
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
  const {
    value, content, user_id, student_id,
  } = state.addPoints;

  try {
    console.log(value);
    console.log(content);
    await axiosInstance.post('point/remove', {
      value,
      content,
      student_id,
      user_id,
    }, {
      headers: {
        authorization: token,
      },
    })
      .then(() => {
        dispatch(sendSuccessMessage("Vos points à l'élève ont bien été enlevés."));
        dispatch(fetchStudents());
        dispatch(fetchHouses());
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

export const addStudent = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.user;
  const {
    lastname, firstname, class_name, user_id, house_id, score,
  } = state.adminStudent;
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
    dispatch(sendSuccessMessage("L'élève a bien été ajouté."));
    setTimeout(() => {
      dispatch(sendSuccessMessage());
    }, 5000);
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
    dispatch(sendSuccessMessage("L'élève a bien été supprimé."));
    dispatch(fetchAdminStudents());
    dispatch(fetchStudents());
    dispatch(fetchTopStudents());
    setTimeout(() => {
      dispatch(sendSuccessMessage());
    }, 5000);
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
  const user_id = state.user.id;
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
    dispatch(SuccessMessage("Les informations de l'utilisateur ont bien été modifiées."));
    dispatch(fetchTopStudents());
  }
  catch (e) {
    console.log(e);
  }
};
