/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  saveUserId, saveUserFirstname, saveUserLastname, saveUserRoleId, saveUserEmail, changeUserInfo, changeRole,
} from '../../../store/reducers/changeUserInfo';
import { changeInfoUser } from '../../../api/users';
import Field from '../../Login/Field';
import wand from '../../../assets/img/wand.png';
import './style.scss';

const User = ({
  firstname, lastname, role_id, handleClick, id, email, onClickConfirm,
}) => {
  const dispatch = useDispatch();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [showFormPassword, setShowFormPassword] = useState(false);
  const [showAdd, setShowAddForm] = useState(false);
  const newFirstName = useSelector((state) => state.changeUserInfo.firstname);
  const newLastName = useSelector((state) => state.changeUserInfo.lastname);
  const newEmail = useSelector((state) => state.changeUserInfo.email);
  const newRole_id = useSelector((state) => state.changeUserInfo.role_id);

  const showFormUser = () => {
    setShowAddForm(!showAdd);
    dispatch(saveUserFirstname(firstname));
    dispatch(saveUserLastname(lastname));
    dispatch(saveUserEmail(email));
    dispatch(saveUserRoleId(role_id));
    dispatch(saveUserId(id));
  };

  const manageFormPassword = () => {
    setShowFormPassword(!showFormPassword);
    if (showFormPassword) {
      setShowFormPassword(!showFormPassword);
    }
  };

  const handleInputChange = (value, name) => {
    dispatch(changeUserInfo({ key: name, value: value }));
  };

  const handleRoleChange = (evt) => {
    dispatch(changeRole(evt.target.value));
  };

  const handleChangeUser = (evt) => {
    evt.preventDefault();
    console.log("yes")
    dispatch(changeInfoUser());
  };

  return (

    <div className="point-student">
      <div className="point-student-header">
        <div className="student-header-info">
          <span className="student-point-name">{firstname}  </span>
          <span className="student-point-name"> {lastname} </span>
          {!showFormPassword && (
          <button type="button" className="action-button" onClick={manageFormPassword}>Modifier le mot de passe</button>
          )}
          {showFormPassword && (
            <form className="change-user-recipient">
              <div className="input-fields">
                <Field
                  name="password"
                  placeholder="Nouveau mot de passe"
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
                  onClick={manageFormPassword}
                >
                  Annuler
                </button>
              </div>

            </form>
          )}
          { id !== 1 && (deleteConfirmation ? <button type="button" className="action-button" onClick={onClickConfirm}>Recliquez pour confirmer</button>
            : (
              <button
                type="button"
                className="action-button"
                value={id}
                onClick={() => {
                  setDeleteConfirmation(true); handleClick(id);
                }}
              >Supprimer l'utilisateur
              </button>
            ))}

        </div>
        <div className="form-user-manage">
          {showAdd ? <div className="add" onClick={showFormUser}><img src={wand} alt="baguette" /></div>
            : <div className="add" onClick={showFormUser}><img src={wand} alt="baguette" /></div> }
        </div>

      </div>
      {showAdd && (
        <form className="add-student-recipient" onSubmit={handleChangeUser}>
          <div className="input-fields">
            <Field
              name="firstname"
              value={newFirstName}
              onChange={handleInputChange}
            />
            <Field
              name="lastname"
              value={newLastName}
              onChange={handleInputChange}
            />

            <Field
              name="email"
              value={newEmail}
              onChange={handleInputChange}
            />

            <select name="role-id" className="form-select-change-house" value={newRole_id} onChange={handleRoleChange}>
              <option value="1">Administrateur</option>
              {id !== 1 && (<option value="2">Professeur</option>)}
            </select>

          </div>

          <button className="add-student-submit" type="submit">Valider</button>

        </form>
      )}
    </div>

  );
};

export default User;

User.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role_id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onClickConfirm: PropTypes.func.isRequired,
};
