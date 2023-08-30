/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  changeContentAndValue, changeUser, selectStudent, resetForm,
} from '../../../../../store/reducers/addPoints';
import { addPointStudents, removePointStudents } from '../../../../../api/students';
import Field from '../../../../ReusableComponents/Field';
import './style.scss';

const Student = ({
  firstname, lastname, house_name, student_total_score, id, toggleAddPoint, showAdd, toggleDeletePoint, showDelete,
}) => {
  const content = useSelector((state) => state.addPoints.content);
  const valueContent = useSelector((state) => state.addPoints.value);
  const user_id = useSelector((state) => state.user.id);
  const [isCustom, setIsCustom] = useState(false);
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

  const handlePointShortcutsClick = (event) => {
    dispatch(selectStudent(id));
    dispatch(changeUser(user_id));
    dispatch(changeContentAndValue({ key: 'content', value: 'Ajout rapide' }));
    dispatch(changeContentAndValue({ key: 'value', value: event.target.value }));
    if (event.target.value > 0) {
      dispatch(addPointStudents());
    }
    else {
      dispatch(changeContentAndValue({ key: 'value', value: (event.target.value * -1) }));
      dispatch(removePointStudents());
    }
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
    <div className="point-student">
      <div className="point-student-header">
        <div className="student-header-info">
          <span className="student-point-name"> {lastname} {firstname}  </span>
          <span className="student-point-house">Maison : {house_name} </span>
          <span className="student-point-points">{student_total_score} points </span>
        </div>
        <div className="point-student-manage">
          <button className="quick-shortcut red" type="button" value={-5} onClick={handlePointShortcutsClick}>-5</button>
          <button className="quick-shortcut orange" type="button" value={-3} onClick={handlePointShortcutsClick}>-3</button>
          <button className="quick-shortcut lightgreen" type="button" value={5} onClick={handlePointShortcutsClick}>+5</button>
          <button className="quick-shortcut green" type="button" value={10} onClick={handlePointShortcutsClick}>+10</button>
          <div className="add" onClick={manageAddPoint}>+</div>
          <div className="delete" onClick={manageDeletePoint}>-</div>
        </div>
      </div>

      {showAdd && (
        <div className="point-student-footer">
          <div className="point-student-footer-manage">
            <span className="point-student-footer-text">Ajouter des points</span>
            <form className="point-student-add" onSubmit={handleAddPoint}>
              <select
                className="select-menu"
                value={content}
                onChange={(e) => handleInputChange(e.target.value, 'content')}
              >
                <option value="">Selectionez une raison:</option>
                <option value="Réajustement">Réajustement</option>
                <option value="Je participe activement">Je participe activement</option>
                <option value="J’aide un camarade qui en a besoin (tutorat)">J’aide un camarade qui en a besoin (tutorat)</option>
                <option value="J’ai fais mes devoirs sérieusement">J’ai fait mes devoirs sérieusement</option>
                <option value="Je suis fair-play ">Je suis fair-play </option>
                <option value="Je travaille en autonomie calmement">Je travaille en autonomie calmement</option>
                <option value="Je passe un niveau sur Pix ">Je passe un niveau sur Pix </option>
                <option value="Je règle une situation de conflit sans l’intervention d’un adulte "> Je règle une situation de conflit sans l’intervention d’un adulte </option>
                <option value="Je travaille en groupe de manière efficace et calme ">Je travaille en groupe de manière efficace et calme </option>
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
            <select
              className="select-menu"
              value={content}
              onChange={(e) => handleInputChange(e.target.value, 'content')}
            >
              <option value="Aucune raison selectionnée">Selectionez une raison:</option>
              <option value="Réajustement">Réajustement</option>
              <option value="Je bavarde">Je bavarde</option>
              <option value="J’oublie mon matériel">J’oublie mon matériel</option>
              <option value="Je n’ai pas fait mes devoirs">Je n’ai pas fait mes devoirs</option>
              <option value="Je me déplace sans autorisation">Je me déplace sans autorisation</option>
              <option value="Je suis en retard sans justification ">Je suis en retard sans justification </option>
              <option value="Je suis agité dans les couloirs / en entrant en classe">Je suis agité dans les couloirs / en entrant en classe</option>
              <option value="Je laisse des papiers par terre / Je dégrade le matériel de l’établissement ">Je laisse des papiers par terre / Je dégrade le matériel de l’établissement </option>
              <option value="J’oublie de rendre à temps un livre du CDI"> J’oublie de rendre à temps un livre du CDI </option>
              <option value="Je suis exclu de la classe.">Je suis exclu de la classe. </option>
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
