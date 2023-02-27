// == Import
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHouses } from '../../api/houses';
import { fetchStudents } from '../../api/students';
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
import './styles.scss';


// == Composant
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
    dispatch(fetchStudents());
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regles" element={<Rules />} />
        <Route path="/login" element={<Login />} />
        <Route path="/histoire" element={<Lore />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/mon-compte" element={<Account />} />
        <Route path="/mon-compte/mot-de-passe" element={<Password />} />
        <Route path="/classement/maisons" element={<PointsManagement component={<PointsHouse />} selectedHouse="selected" page="page-house" />} />
        <Route path="/classement/eleves" element={<PointsManagement component={<PointsStudents />} selectedStudent="selected" page="page-student" />} />
        <Route path="/admin/eleves" element={<AdminInterface component={<AdminInterfaceStudents />} selectedStudent="selected" page="page-student" />} />
        <Route path="/admin/utilisateurs" element={<AdminInterface component={<AdminInterfaceTeachers />} selectedTeacher="selected" page="page-house" />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
      <Footer />
    </div>
  );
};
// == Export
export default App;
