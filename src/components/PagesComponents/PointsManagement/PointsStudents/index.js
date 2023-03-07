import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { changeSearchStudent } from '../../../../store/reducers/student';
import './style.scss';
import SearchBar from '../../../ReusableComponents/SearchBar';
import Student from './Student';

const PointsStudents = () => {
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.student.filterStudent);
  const successMessage = useSelector((state) => state.addPoints.successMessage);
  const searchStudent = useSelector((state) => state.student.searchStudent);
  const [activeStudentId, setActiveStudentId] = useState(null);
  const [removeStudentId, setRemoveStudentId] = useState(null);

  const filteredStudents = searchStudent
    ? studentData.filter((student) => student.firstname.toLowerCase().includes(searchStudent.toLowerCase())
      || student.lastname.toLowerCase().includes(searchStudent.toLowerCase()))
    : studentData;

  const handleInputChange = (value, name) => {
    dispatch(changeSearchStudent({ key: name, value: value }));
  };

  const toggleAddPoint = (studentId) => {
    setActiveStudentId((prevId) => (prevId === studentId ? null : studentId));
    setRemoveStudentId((null));
  };

  const toggleDeletePoint = (studentId) => {
    setRemoveStudentId((prevId) => (prevId === studentId ? null : studentId));
    setActiveStudentId((null));
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
          showAdd={student.id === activeStudentId}
          toggleAddPoint={toggleAddPoint}
          showDelete={student.id === removeStudentId}
          toggleDeletePoint={toggleDeletePoint}
        />
      ))}

    </div>
  );
};

export default PointsStudents;
