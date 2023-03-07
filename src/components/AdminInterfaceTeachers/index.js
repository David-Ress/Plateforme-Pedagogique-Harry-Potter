import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import User from './User';
import AddUserForm from './AddUserForm';
import { fetchUsers, deleteUser } from '../../api/users';
import { changeTargetId } from '../../store/reducers/adminUser';

const AdminInterfaceTeachers = () => {
  const [activeUserId, setActiveUserId] = useState(null);
  const userData = useSelector((state) => state.adminUser.userList);
  const successMessage = useSelector((state) => state.changeUserInfo.successMessage);
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

  const toggleAddPoint = (userId) => {
    setActiveUserId((prevId) => (prevId === userId ? null : userId));
  };

  return (
    <div className="points-management-recipient">
      <AddUserForm />
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
      {userData.map((user) => (
        <User
          key={user.id}
          {...user}
          handleClick={handleClick}
          onClickConfirm={onClickConfirm}
          showAdd={user.id === activeUserId}
          toggleAddPoint={toggleAddPoint}
        />
      ))}

    </div>

  );
};

export default AdminInterfaceTeachers;
