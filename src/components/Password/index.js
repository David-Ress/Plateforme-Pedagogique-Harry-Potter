import Navbar from '../Navbar';
import Field from '../Login/Field';
import './style.scss';

const Password = () => (
  <div className="password-page">
    <Navbar classColor="logo grey" classLinkColor="menu-link grey" classColorBurger="grey" />
    <div className="password-form">
      <form autoComplete="off" className="login-form-element">
        <h1> Modification du mot de passe</h1>
        <Field
          name="password"
          placeholder="Ancien mot de passe"
          // onChange={changeField}
          // value="email"
        />
        <Field
          name="password"
          type="password"
          placeholder="Nouveau mot de passe"
          // onChange={changeField}
          // value=""
        />

        <Field
          name="password"
          type="password"
          placeholder="Confirmation du nouveau mot de passe"
          // onChange={changeField}
          // value=""
        />

        <button
          type="submit"
          className="login-form-button"
        >
          Valider
        </button>
      </form>
    </div>
  </div>
);

export default Password;
