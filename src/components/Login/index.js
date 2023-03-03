/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch, useSelector } from 'react-redux';
import { changeEmailAndPassword } from '../../store/reducers/user';
import Navbar from '../Navbar';
import Field from './Field';
import { login } from '../../api/users';
import './style.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const errorMessage = useSelector((state) => state.user.errorMessage);
  // const logged = useSelector((state) => state.user.logged);
  const handleInputChange = (value, name) => {
    dispatch(changeEmailAndPassword({ key: name, value: value }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login());
  };

  return (
    <div className="login-form">
      <Navbar classColor="logo grey" classLinkColor="menu-link grey" classColorBurger="grey" />
      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <h2 className="login-form-title">
          Se connecter
        </h2>
        <Field
          onChange={handleInputChange}
          name="email"
          placeholder="Email"
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={handleInputChange}
          value={password}
        />
        <button
          type="submit"
          className="login-form-button"
        >
          Connexion
        </button>
        {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
        )};
      </form>
    </div>
  );
};

export default LoginForm;
