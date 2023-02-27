import './style.scss';
import User from './User';
import AddUserForm from './AddUserForm';
import userData from '../../db/users.json';

const AdminInterfaceTeachers = () => (
  <div className="points-management-recipient">
    <AddUserForm />
    {userData.map((user) => (
      <User
        key={user.id}
        {...user}
      />
    ))}

  </div>
);

export default AdminInterfaceTeachers;
