import PropTypes from 'prop-types';
import './style.scss';

const FilterMobile = ({
  handleShowFilter,
}) => (
  <div className="filter-mobile">
    <button type="button" onClick={handleShowFilter}>Filtrer et Trier</button>
  </div>

);

FilterMobile.propTypes = {
  handleShowFilter: PropTypes.func.isRequired,
};

export default FilterMobile;
