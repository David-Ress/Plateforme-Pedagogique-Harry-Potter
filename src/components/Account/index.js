import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Item from './Item';
import Navbar from '../Navbar';
import './style.scss';
import student from '../../assets/img/student.png';
import house from '../../assets/img/house.png';
import password from '../../assets/img/password.png';
import user from '../../assets/img/user.png';

const Account = () => {
  const [role, setRole] = useState('prof');
  return (
    <div className="page-account">
      <Helmet>
        <title>Mon compte</title>
      </Helmet>
      <Navbar classColor="logo grey" classLinkColor="menu-link grey" classColorBurger="grey" />
      <div className="account">
        <h1>Bienvenue sur votre compte [name]</h1>
        {/* Ajouter un onclick pour la deconnexion */}
        <a href="#" className="account-disconnect">
          Se déconnecter
        </a>
        <div className="account-list">
          <Item link="/classement/eleves" image={student} name="Les élèves" />
          <Item link="/classement/maisons" image={house} name="Les maisons" />
          {role === 'admin' && (
          <Item link="#" image={user} name="Gestion des utilisateurs" />
          )}
          <Item link="/mon-compte/mot-de-passe" image={password} name="Modification de mot de passe" />
        </div>
      </div>
    </div>
  );
};

export default Account;
