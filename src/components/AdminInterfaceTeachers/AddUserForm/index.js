import Field from '../../Login/Field';
import './style.scss';

const AddUserForm = () => (
  <form className="add-student-recipient">
    <h2> Ajouter un nouvel utilisateur</h2>
    <div className="input-fields">
      <Field
        name="lastname"
        placeholder="Nom"
      />
      <Field
        name="email"
        placeholder="Email"
      />
      <Field
        name="password"
        placeholder="Mot de Passe"
      />
      <label htmlFor="house">Rôle:
        <select name="house" className="form-select">
          <option value="Gryffondor">Administrateur</option>
          <option value="Serpentard">Professeur</option>
        </select>
      </label>
    </div>

    <button className="add-student-submit" type="button">Valider</button>

  </form>
);

export default AddUserForm;
