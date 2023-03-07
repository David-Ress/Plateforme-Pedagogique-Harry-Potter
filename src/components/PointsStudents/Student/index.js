/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeContentAndValue, changeUser, selectStudent, resetForm,
} from '../../../store/reducers/addPoints';
import { addPointStudents, removePointStudents } from '../../../api/students';
import Field from '../../ReusableComponents/Field';
import './style.scss';

const Student = ({
  firstname, lastname, house_name, student_total_score, id, toggleAddPoint, showAdd, toggleDeletePoint, showDelete,
}) => {
  const content = useSelector((state) => state.addPoints.content);
  const valueContent = useSelector((state) => state.addPoints.value);
  const user_id = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  const manageAddPoint = () => {
    toggleAddPoint(id);
  };
  const manageDeletePoint = () => {
    toggleDeletePoint(id);
  };

  const handleAddPoint = (evt) => {
    evt.preventDefault();
    dispatch(addPointStudents());
    dispatch(resetForm());
    toggleAddPoint(id);
  };

  const handleRemovePoint = (evt) => {
    evt.preventDefault();
    dispatch(removePointStudents());
    dispatch(resetForm());
    toggleDeletePoint(id);
  };

  const handleInputChange = (value, name) => {
    dispatch(selectStudent(id));
    dispatch(changeUser(user_id));
    dispatch(changeContentAndValue({ key: name, value: value }));
  };

  return (
    <div className="point-student">
      <div className="point-student-header">
        <div className="student-header-info">
          <span className="student-point-name">{firstname} {lastname} </span>
          <span className="student-point-house">Maison : {house_name} </span>
          <span className="student-point-points">{student_total_score} points </span>
        </div>
        <div className="point-student-manage">
          <div className="add" onClick={manageAddPoint}>+</div>
          <div className="delete" onClick={manageDeletePoint}>-</div>
        </div>
      </div>

      {showAdd && (
        <div className="point-student-footer">
          <div className="point-student-footer-manage">
            <span className="point-student-footer-text">Ajouter des points</span>
            <form className="point-student-add" onSubmit={handleAddPoint}>
              <Field
                name="content"
                placeholder="Motif"
                type="text"
                onChange={handleInputChange}
                value={content}
              />

              <Field
                name="value"
                placeholder="Note"
                type="number"
                className="field-note"
                onChange={handleInputChange}
                value={valueContent}
              />

              <button
                type="submit"
                className="point-student-submit"
              >
                Valider
              </button>

              <button
                type="button"
                className="point-student-cancel"
                onClick={manageAddPoint}
              >
                Annuler
              </button>

            </form>
          </div>
        </div>
      )}

      {showDelete && (
      <div className="point-student-footer">
        <div className="point-student-footer-manage">
          <span className="point-student-footer-text">Enlever des points</span>
          <form className="point-student-delete" onSubmit={handleRemovePoint}>
            <Field
              name="content"
              placeholder="Motif"
              type="text"
              onChange={handleInputChange}
              value={content}
            />

            <Field
              name="value"
              placeholder="Note"
              type="number"
              className="field-note"
              onChange={handleInputChange}
              value={valueContent}
            />

            <button
              type="submit"
              className="point-student-submit"
            >
              Valider
            </button>

            <button
              type="button"
              className="point-student-cancel"
              onClick={manageDeletePoint}
            >
              Annuler
            </button>

          </form>
        </div>
      </div>
      )}
    </div>

  );
};

export default Student;

Student.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  house_name: PropTypes.string.isRequired,
  student_total_score: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  toggleAddPoint: PropTypes.func.isRequired,
  toggleDeletePoint: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  showDelete: PropTypes.bool.isRequired,
};
