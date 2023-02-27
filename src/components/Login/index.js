/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch, useSelector } from 'react-redux';
import { changeEmailAndPassword } from '../../store/reducers/user';
import Navbar from '../Navbar';
import Field from './Field';

import './style.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  //const userData = useSelector((state) => state.user.userData);
  const email = useSelector((state) => state.user.userData.email);
  const password = useSelector((state) => state.user.userData.password);
  // const logged = useSelector((state) => state.user.logged);
  const handleInputChange = (value, name) => {
    console.log(value);
    dispatch(changeEmailAndPassword({ key: name, value: value }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      <Navbar classColor="logo grey" classLinkColor="menu-link grey" classColorBurger="grey" />
      <form autoComplete="off" className="login-form-element">
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
      </form>
    </div>
  );
};

export default LoginForm;
