/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useState } from 'react';
import Field from '../../Login/Field';
import './style.scss';

const Student = ({
  firstname, lastname, house_name, score,
}) => {
  const [showAdd, setShowAddForm] = useState(false);
  const [showDelete, setShowDeleteForm] = useState(false);
  const manageAddPoint = () => {
    setShowAddForm(!showAdd);
    if (showDelete) {
      setShowDeleteForm(!showDelete);
    }
  };
  const manageDeletePoint = () => {
    setShowDeleteForm(!showDelete);
    if (showAdd) {
      setShowAddForm(!showAdd);
    }
  };
  return (
    <div className="point-student">
      <div className="point-student-header">
        <div className="student-header-info">
          <span className="student-point-name">{firstname} {lastname} </span>
          <span className="student-point-house">Maison {house_name} </span>
          <span className="student-point-points">{score} points</span>
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
            <form className="point-student-add">
              <Field
                name="motif"
                placeholder="Motif"
                type="text"
                // onChange={changeField}
                // value="email"
              />

              <Field
                name="note"
                placeholder="Note"
                type="number"
                className="field-note"
                // onChange={changeField}
                // value="email"
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
            <form className="point-student-delete">
              <Field
                name="motif"
                placeholder="Motif"
                type="text"
                  // onChange={changeField}
                  // value="email"
              />

              <Field
                name="note"
                placeholder="Note"
                type="number"
                className="field-note"
                // onChange={changeField}
                // value="email"
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
  score: PropTypes.number.isRequired,
};
