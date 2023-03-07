import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../api/users';
import {
  changeContentAndValue, changeUser, changeRole, resetForm,
} from '../../../store/reducers/adminUser';
import Field from '../../ReusableComponents/Field';
import './style.scss';

const AddUserForm = () => {
  const dispatch = useDispatch();
  const lastname = useSelector((state) => state.adminUser.lastname);
  const firstname = useSelector((state) => state.adminUser.firstname);
  const email = useSelector((state) => state.adminUser.email);
  const password = useSelector((state) => state.adminUser.password);
  const user_id = useSelector((state) => state.user.id);

  const handleInputChange = (value, name) => {
    dispatch(changeUser(user_id));
    dispatch(changeContentAndValue({ key: name, value: value }));
  };

  const handleRoleChange = (evt) => {
    dispatch(changeRole(evt.target.value));
  };

  const handleAddUser = (evt) => {
    evt.preventDefault();
    dispatch(addUser());
    dispatch(resetForm());
  };

  return (
    <form className="add-student-recipient" onSubmit={handleAddUser}>
      <h2> Ajouter un nouvel utilisateur</h2>
      <div className="input-fields">
        <Field
          name="lastname"
          placeholder="Nom"
          onChange={handleInputChange}
          value={lastname}
        />
        <Field
          name="firstname"
          placeholder="Prénom"
          onChange={handleInputChange}
          value={firstname}
        />
        <Field
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleInputChange}
          value={email}
        />
        <Field
          name="password"
          placeholder="Mot de Passe"
          type="password"
          onChange={handleInputChange}
          value={password}
        />
        <label htmlFor="house">Rôle:
          <select name="house" className="form-select" onChange={handleRoleChange}>
            <option value={2}>Professeur</option>
            <option value={1}>Administrateur</option>
          </select>
        </label>
      </div>

      <button className="add-student-submit" type="submit">Valider</button>

    </form>
  );
};

export default AddUserForm;
