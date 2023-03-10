import PropTypes from 'prop-types';

const LogItem = ({
  student_firstname, student_lastname, house_name, value, content, user_firstname, user_lastname, created_at,
}) => {
  const rawDate = created_at;
  const dateObj = new Date(rawDate);
  const formattedDate = dateObj.toLocaleDateString();
  return (
    <article className="log-item">
      <div className="log-date">{formattedDate}</div>
      <div className="log-student-name">{student_firstname} {student_lastname}</div>
      <div className="log-house-name">{house_name}</div>
      <div className="log-points">{value} points</div>
      <div className="log-reason">{content}</div>
      <div className="log-teacher">Par {user_firstname} {user_lastname}</div>
    </article>
  );
};

export default LogItem;

LogItem.propTypes = {
  house_name: PropTypes.string.isRequired,
  user_firstname: PropTypes.string.isRequired,
  user_lastname: PropTypes.string.isRequired,
  student_firstname: PropTypes.string.isRequired,
  student_lastname: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
};
