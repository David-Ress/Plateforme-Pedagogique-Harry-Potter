// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = `field-${name}`;

  return (
    <div className="input-field">
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />

    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// == Export
export default Field;
