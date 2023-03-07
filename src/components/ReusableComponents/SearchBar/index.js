import PropTypes from 'prop-types';
import Field from '../Field';
import './style.scss';

const SearchBar = ({
  value, onChange, name,
}) => (
  <form className="search-bar-form">
    <Field
      type="text"
      placeholder="Rechercher un élève par nom/prénom"
      value={value}
      onChange={onChange}
      name={name}
    />
  </form>
);

export default SearchBar;

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
