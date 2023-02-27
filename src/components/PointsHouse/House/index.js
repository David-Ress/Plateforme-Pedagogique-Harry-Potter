/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useState } from 'react';
import Field from '../../Login/Field';
import './style.scss';

const House = ({
  name, score, rank,
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
    <div className="point-house">
      <div className="point-student-header">
        <div className="house-header-info">
          <span className="house-point-name">Maison {name} </span>
          <span className="house-point-points">{score} points </span>
          <span className="house-rank">Position {rank} </span>
        </div>
        <div className="point-house-manage">
          <div className="add" onClick={manageAddPoint}>+</div>
          <div className="delete" onClick={manageDeletePoint}>-</div>
        </div>
      </div>

      {showAdd && (
        <div className="point-house-footer">
          <div className="point-house-footer-manage">
            <span className="point-house-footer-text">Ajouter des points</span>
            <form className="point-house-add">
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
                className="point-house-submit"
              >
                Valider
              </button>

              <button
                type="button"
                className="point-house-cancel"
                onClick={manageAddPoint}
              >
                Annuler
              </button>

            </form>
          </div>
        </div>
      )}

      {showDelete && (
        <div className="point-house-footer">
          <div className="point-house-footer-manage">
            <span className="point-house-footer-text">Enlever des points</span>
            <form className="point-house-delete">
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
                className="point-house-submit"
              >
                Valider
              </button>

              <button
                type="button"
                className="point-house-cancel"
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

export default House;

House.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};
