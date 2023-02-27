/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useState } from 'react';
import './style.scss';
import Field from '../../Login/Field';
import wand from '../../../assets/img/wand.png';

const Student = ({
  firstname, lastname, house_name, studentClass,
}) => {
  const [showAdd, setShowAddForm] = useState(false);
  const manageAddPoint = () => {
    setShowAddForm(!showAdd);
  };
  return (
    <div className="point-student">
      <div className="point-student-header">
        <div className="student-header-info">
          <span className="student-point-name">{firstname}  </span>
          <span className="student-point-name"> {lastname} </span>
          <span className="student-point-points"> classe: {studentClass}</span>
          <button type="button" className="action-button">Supprimer l'élève</button>
        </div>
        <div className="point-student-manage">
          {showAdd ? <div className="add" onClick={manageAddPoint}><img src={wand} alt="baguette" /></div>
            : <div className="add" onClick={manageAddPoint}><img src={wand} alt="baguette" /></div> }
        </div>
      </div>

      {showAdd && (
        <form className="add-student-recipient">
          <div className="input-fields">
            <Field
              name="lastname"
              placeholder={lastname}
            />
            <Field
              name="firstname"
              placeholder={firstname}
            />
            <Field
              name="class"
              placeholder={studentClass}
            />

            <select name="house" className="form-select-change-house" value={house_name}>
              <option value="Gryffondor">Gryffondor</option>
              <option value="Serpentard">Serpentard</option>
              <option value="Poufsouffle">Poufsouffle</option>
              <option value="Serdaigle">Serdaigle</option>
            </select>

          </div>

          <button className="add-student-submit" type="button">Valider</button>

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
  studentClass: PropTypes.string.isRequired,
};
