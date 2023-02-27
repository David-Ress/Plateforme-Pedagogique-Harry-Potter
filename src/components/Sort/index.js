// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Sort = ({
  onChange,
}) =>
(
  <form className="form-sort">
    <span className="form-sort-title">Trier par</span>
    <select>
      <option value="alphabet">De A à Z</option>
      <option value="reverse-alphabet">De Z à A</option>
      <option value="sort">Score croissant</option>
      <option value="reverse-sort">Scrore décroissant</option>
    </select>
  </form>
  );

Sort.propTypes = {
  onChange: PropTypes.func.isRequired,
};

// == Export
export default Sort;
