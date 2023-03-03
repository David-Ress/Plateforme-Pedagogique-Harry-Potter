import { useDispatch, useSelector } from 'react-redux';
import { changeNewPassword } from '../../store/reducers/user';
import { changePassword } from '../../api/users';
import Navbar from '../Navbar';
import Field from '../Login/Field';
import './style.scss';

const Password = () => {
  const dispatch = useDispatch();
  const oldPassword = useSelector((state) => state.user.oldPassword);
  const newPassword = useSelector((state) => state.user.newPassword);
  const confirmation = useSelector((state) => state.user.confirmation);
  const successMessage = useSelector((state) => state.user.confirmMessage);
  console.log(successMessage);

  const handleInputChange = (value, name) => {
    dispatch(changeNewPassword({ key: name, value: value }));
  };

  const handleChangePassword = (evt) => {
    evt.preventDefault();
    dispatch(changePassword());
  };

  return (
    <div className="password-page">
      <Navbar classColor="logo grey" classLinkColor="menu-link grey" classColorBurger="grey" />
      <div className="password-form">
        <form autoComplete="off" className="login-form-element" onSubmit={handleChangePassword}>
          <h1> Modification du mot de passe</h1>
          <Field
            name="oldPassword"
            type="password"
            placeholder="Ancien mot de passe"
            onChange={handleInputChange}
            value={oldPassword}
          />
          <Field
            name="newPassword"
            type="password"
            placeholder="Nouveau mot de passe"
            onChange={handleInputChange}
            value={newPassword}
          />

          <Field
            name="confirmation"
            type="password"
            placeholder="Confirmation du nouveau mot de passe"
            onChange={handleInputChange}
            value={confirmation}
          />

          <button
            type="submit"
            className="login-form-button"
          >
            Valider
          </button>

          {successMessage && (
            <div className="success-message-password">
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Password;
