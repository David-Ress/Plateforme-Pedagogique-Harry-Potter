import Field from '../Login/Field';
import './style.scss';

const SearchBar = () => (
  <form className="search-bar-form">
    <Field
      type="text"
      placeholder="Rechercher un élève par nom/prénom"
      value=""
    />
  </form>
);

export default SearchBar;
