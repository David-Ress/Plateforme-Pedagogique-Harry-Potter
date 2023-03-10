import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { addPointHouses, removePointHouses } from '../../../../../api/houses';
import Field from '../../../../ReusableComponents/Field';
import {
  changeContentAndValue, changeUser, selectHouse, resetForm,
} from '../../../../../store/reducers/addPoints';
import './style.scss';

const House = ({
  houseName, houses_total_score, id, toggleAddPoint, showAdd, toggleDeletePoint, showDelete,
}) => {
  const content = useSelector((state) => state.addPoints.content);
  const valueContent = useSelector((state) => state.addPoints.value);
  const user_id = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  const [shouldRender, setShouldRender] = useState(true);
  const [isCustom, setIsCustom] = useState(false);

  const manageAddPoint = () => {
    toggleAddPoint(id);
  };
  const manageDeletePoint = () => {
    toggleDeletePoint(id);
  };

  const handleAddPoint = (evt) => {
    evt.preventDefault();
    dispatch(addPointHouses());
    dispatch(resetForm());
    toggleAddPoint(id);
    setShouldRender(!shouldRender);
  };

  const handleRemovePoint = (evt) => {
    evt.preventDefault();
    dispatch(removePointHouses());
    dispatch(resetForm());
    toggleDeletePoint(id);
    setShouldRender(!shouldRender);
  };

  const handleInputChange = (value, name) => {
    dispatch(selectHouse(id));
    dispatch(changeUser(user_id));
    if (name === 'content' && value === 'Autre') {
      dispatch(changeContentAndValue({ key: name, value }));
      dispatch(changeContentAndValue({ key: 'content', value: null }));
      setIsCustom(true);
    }
    else if (name === 'value' && isCustom) {
      dispatch(changeContentAndValue({ key: name, value }));
    }
    else {
      setIsCustom(false);
      dispatch(changeContentAndValue({ key: name, value }));
    }
  };

  return (
    <div className="point-house">
      <Helmet>
        Gestion des points des maisons
      </Helmet>
      <div className="point-student-header">
        <div className="house-header-info">
          <span className="house-point-name">Maison {houseName} </span>
          <span className="house-point-points">{houses_total_score} points </span>
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
            <form className="point-house-add" onSubmit={handleAddPoint}>
              <select
                className="select-menu"
                value={content}
                onChange={(e) => handleInputChange(e.target.value, 'content')}
              >
                <option value="">Selectionez une raison:</option>
                <option value="Réajustement">Réajustement</option>
                <option value="Autre">Autre...</option>
              </select>
              {isCustom ? (
                <Field
                  name="content"
                  placeholder="Motif"
                  type="text"
                  onChange={(value) => dispatch(changeContentAndValue({ key: 'content', value }))}
                  value={content}
                />
              ) : null}

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
          <form className="point-house-delete" onSubmit={handleRemovePoint}>
            <select
              className="select-menu"
              value={content}
              onChange={(e) => handleInputChange(e.target.value, 'content')}
            >
              <option value="">Selectionez une raison:</option>
              <option value="Réajustement">Réajustement</option>
              <option value="Autre">Autre...</option>
            </select>
            {isCustom ? (
              <Field
                name="content"
                placeholder="Motif"
                type="text"
                onChange={(value) => dispatch(changeContentAndValue({ key: 'content', value }))}
                value={content}
              />
            ) : null}

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
  houseName: PropTypes.string.isRequired,
  houses_total_score: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  toggleAddPoint: PropTypes.func.isRequired,
  toggleDeletePoint: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  showDelete: PropTypes.bool.isRequired,
};
