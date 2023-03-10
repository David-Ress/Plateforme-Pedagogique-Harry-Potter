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
        min={0}
        className="field-input"
        placeholder={placeholder}
        name={name}
        required
      />

    </div>
  );
};

Field.propTypes = {
  value: PropTypes.any,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

// == Export
export default Field;
