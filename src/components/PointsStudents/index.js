import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { changeSearchStudent } from '../../store/reducers/student';
import './style.scss';
import SearchBar from '../SearchBar';
import Student from './Student';

const PointsStudents = () => {
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.student.filterStudent);
  const successMessage = useSelector((state) => state.addPoints.successMessage);
  const searchStudent = useSelector((state) => state.student.searchStudent);

  const filteredStudents = searchStudent
    ? studentData.filter((student) =>
      student.firstname.toLowerCase().includes(searchStudent.toLowerCase())
      || student.lastname.toLowerCase().includes(searchStudent.toLowerCase()))
    : studentData;

  const handleInputChange = (value, name) => {
    dispatch(changeSearchStudent({ key: name, value: value }));
  };

  return (
    <div className="points-management-recipient">
      <Helmet>
        <title>Gestion des points des élèves</title>
      </Helmet>
      <SearchBar name="searchStudent" value={searchStudent} onChange={handleInputChange} />
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
      {filteredStudents.map((student) => (
        <Student
          key={student.id}
          {...student}
        />
      ))}

    </div>
  );
};

export default PointsStudents;
