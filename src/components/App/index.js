// == Import modules
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '../../api/houses';
import { fetchStudents, fetchTopStudents } from '../../api/students';

// Import des composants pages qui nécéssitent des appels APIs
import Home from '../PagesComponents/Home';
import Login from '../PagesComponents/Login';
import Account from '../PagesComponents/Account';
import Password from '../PagesComponents/Password';
import PointsManagement from '../PagesComponents/PointsManagement';
import PointsHouse from '../PagesComponents/PointsManagement/PointsHouse';
import PointsStudents from '../PagesComponents/PointsManagement/PointsStudents';
import AdminInterface from '../PagesComponents/AdminInterface';
import AdminInterfaceStudents from '../PagesComponents/AdminInterface/AdminInterfaceStudents';
import AdminInterfaceTeachers from '../PagesComponents/AdminInterface/AdminInterfaceTeachers';
import PointsLog from '../PagesComponents/PointsLog';
// Import des composants pages qui sont réutilisés dans différentes pages
import SortHouse from '../ReusableComponents/SortHouse';
import SortStudent from '../ReusableComponents/SortStudent';
import SortUser from '../ReusableComponents/SortUser';
import Footer from '../ReusableComponents/Footer';
// Import des composants pages qui ont du contenu statique qui ne changera pas (ou presque)
import TeamProject from '../StaticPagesComponents/TeamProject';
import Lore from '../StaticPagesComponents/Lore';
import PageNotFound from '../StaticPagesComponents/PageNotFound';
import LegalNotice from '../StaticPagesComponents/LegalNotice';
import Rules from '../StaticPagesComponents/Rules';
import AboutPage from '../StaticPagesComponents/AboutPage';

// Import des reducers
import { sortHouseList } from '../../store/reducers/house';
import { setStudentList } from '../../store/reducers/student';
import { setAdminStudentList } from '../../store/reducers/adminStudent';
import { setUserList } from '../../store/reducers/adminUser';

import './styles.scss';
// == Composant
const App = () => {
  // Appels de nos state redux avec useSelector
  const isLogged = useSelector((state) => state.user.isLogged);
  const userRole = useSelector((state) => state.user.role_id);
  const houseData = useSelector((state) => state.house.sortedList);
  const studentData = useSelector((state) => state.student.list);
  const studentAdminData = useSelector((state) => state.adminStudent.studentList);
  const userData = useSelector((state) => state.adminUser.userList);
  const dispatch = useDispatch();
  // Appel API pour l'affichage sur la homepage et l'affichage des utilisateurs
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
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/equipe-projet" element={<TeamProject />} />
        <Route path="/historique-des-points" element={isLogged ? <PointsLog /> : (<Navigate replace to="/" />)} />
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
