// == Import : npm
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// == Import : local
import './style.scss';

// == Composant
const SortHouse = ({
  houseArray,
  setArray,
}) => {
  const dispatch = useDispatch();
  const sortArray = (selectEvent) => {
    const options = {
      'a-z': [...houseArray].sort((a, b) => (a.name < b.name ? -1 : 1)),
      'z-a': [...houseArray].sort((a, b) => (a.name < b.name ? 1 : -1)),
      '1-9': [...houseArray].sort((a, b) => (Number(a.houses_total_score) < Number(b.houses_total_score) ? -1 : 1)),
      '9-1': [...houseArray].sort((a, b) => (Number(a.houses_total_score) < Number(b.houses_total_score) ? 1 : -1)),
    };
    dispatch(setArray(options[selectEvent.target.value]));
  };
  return (
    <form className="form-sort">
      <span className="form-sort-title">Trier par</span>
      <select onChange={sortArray}>
        <option value="a-z">De A à Z</option>
        <option value="z-a">De Z à A</option>
        <option value="1-9">Score croissant </option>
        <option value="9-1">Scrore décroissant</option>
      </select>
    </form>
  );
};

SortHouse.propTypes = {
  houseArray: PropTypes.array.isRequired,
  setArray: PropTypes.func.isRequired,
};

// == Export
export default SortHouse;
