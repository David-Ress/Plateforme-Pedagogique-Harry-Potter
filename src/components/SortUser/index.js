// == Import : npm
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// == Composant
const SortUser = ({
  userArray,
  setArray,
}) => {
  const dispatch = useDispatch();
  const sortArray = (selectEvent) => {
    const options = {
      'a-z': [...userArray].sort((a, b) => (a.firstname < b.firstname ? -1 : 1)),
      'z-a': [...userArray].sort((a, b) => (a.firstname < b.firstname ? 1 : -1)),
    };
    dispatch(setArray(options[selectEvent.target.value]));
  };
  return (
    <form className="form-sort">
      <span className="form-sort-title">Trier par</span>
      <select onChange={sortArray}>
        <option value="a-z">De A à Z</option>
        <option value="z-a">De Z à A</option>
      </select>
    </form>
  );
};

SortUser.propTypes = {
  userArray: PropTypes.array.isRequired,
  setArray: PropTypes.func.isRequired,
};

export default SortUser;
