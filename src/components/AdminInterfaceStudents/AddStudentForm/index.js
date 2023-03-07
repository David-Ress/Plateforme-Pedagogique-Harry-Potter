/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from '../../../api/students';
import {
  changeContentAndValue, changeUser, changeHouse, resetForm,
} from '../../../store/reducers/adminStudent';
import Field from '../../ReusableComponents/Field';
import './style.scss';

const AddStudentForm = () => {
  const dispatch = useDispatch();
  const lastname = useSelector((state) => state.adminStudent.lastname);
  const firstname = useSelector((state) => state.adminStudent.firstname);
  const class_name = useSelector((state) => state.adminStudent.class_name);
  const score = useSelector((state) => state.adminStudent.score);
  const user_id = useSelector((state) => state.user.id);

  const handleInputChange = (value, name) => {
    dispatch(changeUser(user_id));
    dispatch(changeContentAndValue({ key: name, value: value }));
  };

  const handleHouseChange = (evt) => {
    dispatch(changeHouse(evt.target.value));
  };

  const handleAddStudent = (evt) => {
    evt.preventDefault();
    dispatch(addStudent());
    dispatch(resetForm());
  };

  return (
    <form className="add-student-recipient" onSubmit={handleAddStudent}>
      <h2> Ajouter un nouvel élève</h2>
      <div className="input-fields">
        <Field
          name="lastname"
          placeholder="Nom"
          value={lastname}
          onChange={handleInputChange}
        />
        <Field
          name="firstname"
          placeholder="Prénom"
          value={firstname}
          onChange={handleInputChange}
        />
        <Field
          name="class_name"
          placeholder="Classe"
          value={class_name}
          onChange={handleInputChange}
        />
        <Field
          name="score"
          placeholder="Score"
          value={score}
          onChange={handleInputChange}
        />
        <label htmlFor="house">Maison:
          <select name="house" className="form-select" onChange={handleHouseChange}>
            <option value="2">Gryffondor</option>
            <option value="4">Serpentard</option>
            <option value="3">Poufsouffle</option>
            <option value="1">Serdaigle</option>
          </select>
        </label>
      </div>

      <button className="add-student-submit" type="submit">Valider</button>

    </form>
  );
};

export default AddStudentForm;
