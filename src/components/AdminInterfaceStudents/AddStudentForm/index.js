import Field from '../../Login/Field';
import './style.scss';

const AddStudentForm = () => (
  <form className="add-student-recipient">
    <h2> Ajouter un nouvel élève</h2>
    <div className="input-fields">
      <Field
        name="lastname"
        placeholder="Nom"
      />
      <Field
        name="firstname"
        placeholder="Prénom"
      />
      <Field
        name="class"
        placeholder="Classe"
      />
      <label htmlFor="house">Maison:
        <select name="house" className="form-select">
          <option value="Gryffondor">Gryffondor</option>
          <option value="Serpentard">Serpentard</option>
          <option value="Poufsouffle">Poufsouffle</option>
          <option value="Serdaigle">Serdaigle</option>
        </select>
      </label>
    </div>

    <button className="add-student-submit" type="button">Valider</button>

  </form>
);

export default AddStudentForm;
