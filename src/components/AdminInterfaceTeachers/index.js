import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import User from './User';
import AddUserForm from './AddUserForm';
import { fetchUsers, deleteUser } from '../../api/users';
import { changeTargetId } from '../../store/reducers/adminUser';

const AdminInterfaceTeachers = () => {
  const userData = useSelector((state) => state.adminUser.userList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const handleClick = (id) => {
    dispatch(changeTargetId(id));
  };
  const onClickConfirm = () => {
    dispatch(deleteUser());
  };

  return (
    <div className="points-management-recipient">
      <AddUserForm />
      {userData.map((user) => (
        <User
          key={user.id}
          {...user}
          handleClick={handleClick}
          onClickConfirm={onClickConfirm}
        />
      ))}

    </div>

  );
};

export default AdminInterfaceTeachers;
