import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import Item from './Item';
import Navbar from '../../ReusableComponents/Navbar';
import { logout } from '../../../store/reducers/user';
import './style.scss';
import student from '../../../assets/img/student.png';
import house from '../../../assets/img/house.png';
import password from '../../../assets/img/password.png';
import user from '../../../assets/img/user.png';

const Account = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.firstname);
  const userRole = useSelector((state) => state.user.role_id);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="page-account">
      <Helmet>
        <title>Mon compte</title>
      </Helmet>
      <Navbar classColor="logo grey" classLinkColor="menu-link grey" classColorBurger="grey" />
      <div className="account">
        <h1>Bienvenue sur votre compte {userName && (userName)} </h1>
        {/* Ajouter un onclick pour la deconnexion */}
        <NavLink to="/" className="account-disconnect" onClick={handleLogout}>
          Se déconnecter
        </NavLink>
        <div className="account-list">
          <Item link="/classement/eleves" image={student} name="Les élèves" />
          <Item link="/classement/maisons" image={house} name="Les maisons" />
          {userRole === 1 && (
          <Item link="/admin/utilisateurs" image={user} name="Gestion des utilisateurs" />
          )}
          <Item link="/mon-compte/mot-de-passe" image={password} name="Modification de mot de passe" />
        </div>
      </div>
    </div>
  );
};

export default Account;
