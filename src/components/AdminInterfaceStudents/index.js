import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdminStudents, deleteStudent } from '../../api/students';
import './style.scss';
import SearchBar from '../SearchBar';
import Student from './Student';
import AddStudentForm from './AddStudentForm';
import { changeTargetId, changeContentAndValue } from '../../store/reducers/adminStudent';
import { changeSearchStudent } from '../../store/reducers/student';

const AdminInterfaceStudents = () => {
  const studentData = useSelector((state) => state.adminStudent.filterStudentAdmin);
  const searchStudent = useSelector((state) => state.student.searchStudent);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(changeTargetId(id));
  };
  const onClickConfirm = () => {
    dispatch(deleteStudent());
  };
  useEffect(() => {
    dispatch(fetchAdminStudents());
  }, []);
  const handleInputChange = (value, name) => {
    dispatch(changeContentAndValue({ key: name, value: value }));
  };

  const filteredStudents = searchStudent
    ? studentData.filter((student) =>
      student.firstname.toLowerCase().includes(searchStudent.toLowerCase())
      || student.lastname.toLowerCase().includes(searchStudent.toLowerCase()))
    : studentData;

  const handleInputStudentChange = (value, name) => {
    dispatch(changeSearchStudent({ key: name, value: value }));
  };

  return (
    <div className="points-management-recipient">
      <AddStudentForm />
      <SearchBar name="searchStudent" value={searchStudent} onChange={handleInputStudentChange} />
      {filteredStudents.map((student) => (
        <Student
          key={student.id}
          {...student}
          handleFirstClick={handleClick}
          onClickConfirm={onClickConfirm}
          handleInputChange={handleInputChange}
        />
      ))}

    </div>
  );
};

export default AdminInterfaceStudents;
