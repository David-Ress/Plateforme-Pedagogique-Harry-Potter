/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './style.scss';

const Student = ({
  firstname,
  house_name,
  score,
  house_name_in_english,
  houseLogo,
}) => (
  <ul className="student-list">
    <li className="student-item">
      <img className="student-img" src={houseLogo} alt="blason" />
      <div className={`text-container ${house_name_in_english.toLowerCase()}-border`}>
        <p className={`student-name ${house_name_in_english.toLowerCase()}`}>
          {firstname}
        </p>
        <p className={`student-house ${house_name_in_english.toLowerCase()}`}>
          {house_name}
        </p>
      </div>
      <p className="student-point">
        {score} points
      </p>
    </li>
  </ul>
);

export default Student;

Student.propTypes = {
  firstname: PropTypes.string.isRequired,
  house_name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  house_name_in_english: PropTypes.string.isRequired,
  houseLogo: PropTypes.string.isRequired,
};
