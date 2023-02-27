import './style.scss';
import SearchBar from '../SearchBar';
import Student from './Student';
import AddStudentForm from './AddStudentForm';
import studentData from '../../db/students.json';

const AdminInterfaceStudents = () => (
  <div className="points-management-recipient">
    <AddStudentForm />
    <SearchBar />
    {studentData.map((student) => (
      <Student
        key={student.id}
        {...student}
        studentClass={student.class}
        allHouses={studentData.house_name}
      />
    ))}

  </div>
);

export default AdminInterfaceStudents;
