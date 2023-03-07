/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import Field from '../../../../ReusableComponents/Field';
import wand from '../../../../../assets/img/wand.png';
import { changeContentAndValue, changeHouse } from '../../../../../store/reducers/changeStudent';
import { editStudent } from '../../../../../api/students';

const Student = ({
  firstname, lastname, house_name, class_name, handleFirstClick, onClickConfirm, id, house_id, toggleAddPoint, showAdd,
}) => {
  const selectedStudent = useSelector((state) => state.changeStudent);
  const dispatch = useDispatch();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const manageAddPoint = () => {
    toggleAddPoint(id);
    if (!showAdd) {
      dispatch(changeContentAndValue({
        key: 'firstname',
        value: firstname,
      }));
      dispatch(changeContentAndValue({
        key: 'lastname',
        value: lastname,
      }));
      dispatch(changeContentAndValue({
        key: 'class_name',
        value: class_name,
      }));
      dispatch(changeContentAndValue({
        key: 'house_id',
        value: house_id,
      }));
      dispatch(changeContentAndValue({
        key: 'score',
        value: 0,
      }));
      dispatch(changeContentAndValue({
        key: 'target_id',
        value: id,
      }));
    }
  };
  const handleInputChange = (value, name) => {
    dispatch(changeContentAndValue({ key: name, value: value }));
    console.log(selectedStudent);
  };
  const handleHouseChange = (evt) => {
    dispatch(changeHouse(evt.target.value));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(editStudent());
    toggleAddPoint(id);
  };
  return (
    <div className="point-student">
      <div className="point-student-header">
        <div className="student-header-info">
          <span className="student-point-name">{firstname}  </span>
          <span className="student-point-name"> {lastname} </span>
          <span className="student-point-points"> Classe : {class_name}</span>
          <span className="student-point-points"> Maison : {house_name}</span>
          {deleteConfirmation ? <button type="button" className="action-button" onClick={onClickConfirm}>Recliquez pour confirmer</button>
            : (
              <button
                type="button"
                className="action-button"
                value={id}
                onClick={() => {
                  setDeleteConfirmation(true); handleFirstClick(id);
                }}
              >Supprimer l'élève
              </button>
            ) }
        </div>
        <div className="point-student-manage">
          {showAdd ? <div className="add" onClick={manageAddPoint}><img src={wand} alt="baguette" /></div>
            : <div className="add" onClick={manageAddPoint}><img src={wand} alt="baguette" /></div> }
        </div>
      </div>

      {showAdd && (
        <form className="add-student-recipient" onSubmit={handleSubmit}>
          <div className="input-fields">
            <Field
              name="firstname"
              value={selectedStudent.firstname}
              placeholder={firstname}
              onChange={handleInputChange}
            />

            <Field
              name="lastname"
              value={selectedStudent.lastname}
              placeholder={lastname}
              onChange={handleInputChange}
            />

            <Field
              name="class_name"
              value={selectedStudent.class_name}
              placeholder={class_name}
              onChange={handleInputChange}
            />

            <select name="house" className="form-select-change-house" value={selectedStudent.house_id} onChange={handleHouseChange}>
              <option value="2">Gryffondor</option>
              <option value="4">Serpentard</option>
              <option value="3">Poufsouffle</option>
              <option value="1">Serdaigle</option>
            </select>

          </div>

          <button className="add-student-submit" type="submit">Valider</button>

        </form>
      )}
    </div>

  );
};

export default Student;

Student.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  house_name: PropTypes.string.isRequired,
  class_name: PropTypes.string.isRequired,
  handleFirstClick: PropTypes.func.isRequired,
  toggleAddPoint: PropTypes.func.isRequired,
  onClickConfirm: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  house_id: PropTypes.number.isRequired,
  showAdd: PropTypes.bool.isRequired,
};
