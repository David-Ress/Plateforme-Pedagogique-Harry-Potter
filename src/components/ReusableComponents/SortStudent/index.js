// == Import : npm
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// == Composant
const SortStudent = ({
  studentArray,
  setArray,
}) => {
  const dispatch = useDispatch();
  const sortArray = (selectEvent) => {
    const options = {
      'a-z': [...studentArray].sort((a, b) => (a.firstname.toLowerCase() < b.firstname.toLowerCase() ? -1 : 1)),
      'z-a': [...studentArray].sort((a, b) => (a.firstname.toLowerCase() < b.firstname.toLowerCase() ? 1 : -1)),
      '1-9': [...studentArray].sort((a, b) => (Number(a.student_total_score) < Number(b.student_total_score) ? -1 : 1)),
      '9-1': [...studentArray].sort((a, b) => (Number(a.student_total_score) < Number(b.student_total_score) ? 1 : -1)),
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
        <option value="9-1">Score décroissant</option>
      </select>
    </form>
  );
};

SortStudent.propTypes = {
  studentArray: PropTypes.array.isRequired,
  setArray: PropTypes.func.isRequired,
};

// == Export
export default SortStudent;
