/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './style.scss';

const Student = ({
  firstname,
  lastname,
  house_name,
  total_score,
  houseLogo,
}) => {
  const houseNameLowercase = typeof house_name === 'string' ? house_name.toLowerCase() : '';
  const firstLetterName = typeof lastname === 'string' ? lastname.charAt(0) : '';
  return (
    <ul className="student-list">
      <li className="student-item">
        <img className="student-img" src={houseLogo} alt="blason" />
        <div className={`text-container ${houseNameLowercase}-border`}>
          <p className={`student-name ${houseNameLowercase}`}>
            {firstname} {firstLetterName}
          </p>
          <p className={`student-house ${houseNameLowercase}`}>
            {house_name}
          </p>
        </div>
        <p className="student-point">
          {total_score} points
        </p>
      </li>
    </ul>
  );
};

Student.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  house_name: PropTypes.string,
  total_score: PropTypes.number,
  houseLogo: PropTypes.string,
};

export default Student;
