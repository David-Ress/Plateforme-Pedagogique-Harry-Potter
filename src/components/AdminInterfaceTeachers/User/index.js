/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './style.scss';

const User = ({
  firstname, lastname, role_id,
}) => (
  <div className="point-student">
    <div className="point-student-header">
      <div className="student-header-info">
        <span className="student-point-name">{firstname}  </span>
        <span className="student-point-name"> {lastname} </span>
        <button type="button" className="action-button">Modifier le mot de passe</button>
        <button type="button" className="action-button">Supprimer l'utilisateur</button>
      </div>
      <form className="form-select-change-house">
        <select name="house" className="form-select-change-user-role" value={role_id}>
          <option value={1}>Administrateur</option>
          <option value={2}>Professeur</option>
        </select>
      </form>
    </div>

  </div>

);

export default User;

User.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  role_id: PropTypes.number.isRequired,
};
