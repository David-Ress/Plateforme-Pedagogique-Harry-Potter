// == Import
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '../../api/houses';
import { fetchStudents, fetchTopStudents } from '../../api/students';
import Footer from '../Footer';
import Home from '../Home';
import Login from '../Login';
import Lore from '../Lore';
import Account from '../Account';
import Rules from '../Rules';
import LegalNotice from '../LegalNotice';
import Password from '../Password';
import PointsManagement from '../PointsManagement';
import PointsHouse from '../PointsHouse';
import PointsStudents from '../PointsStudents';
import PageNotFound from '../PageNotFound';
import AdminInterface from '../AdminInterface';
import AdminInterfaceStudents from '../AdminInterfaceStudents';
import AdminInterfaceTeachers from '../AdminInterfaceTeachers';
import SortHouse from '../SortHouse';
import SortStudent from '../SortStudent';
import SortUser from '../SortUser';
import { sortHouseList } from '../../store/reducers/house';
import './styles.scss';
import { setStudentList } from '../../store/reducers/student';
import { setAdminStudentList } from '../../store/reducers/adminStudent';
import { setUserList } from '../../store/reducers/adminUser';

// == Composant
const App = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const userRole = useSelector((state) => state.user.role_id);
  const houseData = useSelector((state) => state.house.sortedList);
  const studentData = useSelector((state) => state.student.list);
  const studentAdminData = useSelector((state) => state.adminStudent.studentList);
  const userData = useSelector((state) => state.adminUser.userList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
    dispatch(fetchStudents());
    dispatch(fetchTopStudents());
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regles" element={<Rules />} />
        <Route path="/login" element={isLogged ? (<Navigate replace to="/mon-compte" />) : <Login />} />
        <Route path="/histoire" element={<Lore />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/mon-compte" element={isLogged ? <Account /> : (<Navigate replace to="/" />)} />
        <Route
          path="/mon-compte/mot-de-passe"
          element={isLogged
            ? <Password /> : (<Navigate replace to="/" />)}
        />
        <Route
          path="/classement/maisons"
          element={isLogged
            ? (
              <PointsManagement
                component={<PointsHouse />}
                selectedHouse="selected"
                page="page-house"
                sortComponent={<SortHouse houseArray={houseData} setArray={sortHouseList} />}
              />
            )
            : (<Navigate replace to="/" />)}
        />
        <Route
          path="/classement/eleves"
          element={isLogged
            ? (
              <PointsManagement
                component={<PointsStudents />}
                selectedStudent="selected"
                page="page-student"
                sortComponent={<SortStudent studentArray={studentData} setArray={setStudentList} />}
              />
            )
            : (<Navigate replace to="/" />)}
        />
        <Route
          path="/admin/eleves"
          element={isLogged && userRole === 1
            ? (
              <AdminInterface
                component={<AdminInterfaceStudents />}
                selectedStudent="selected"
                page="page-student"
                sortComponent={<SortUser userArray={studentAdminData} setArray={setAdminStudentList} />}
              />
            )
            : (<Navigate replace to="/" />)}
        />
        <Route
          path="/admin/utilisateurs"
          element={isLogged && userRole === 1
            ? (
              <AdminInterface
                component={<AdminInterfaceTeachers />}
                selectedTeacher="selected"
                page="page-house"
                sortComponent={<SortUser userArray={userData} setArray={setUserList} />}
              />
            )
            : (<Navigate replace to="/" />)}
        />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
      <Footer />
    </div>
  );
};
// == Export
export default App;
