/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import NavbarMobile from './NavbarMobile';
import './style.scss';

const Navbar = ({
  classColor,
  classLinkColor,
  classColorBurger
}) => {
  // Utilisation du use state pour gérer l'affichage du menu
  const [showLinks, setShowLinks] = useState(false);
  const [isLogged, setLogged] = useState(false);
  // Fonction permettant d'afficher ou non le menu mobile
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <NavbarMobile handleShowLinks={handleShowLinks} classColorBurger={classColorBurger} />
      <Logo classColor={classColor} />
      <nav className={`menu ${showLinks ? 'show-nav' : ''}`}>
        <div className={`logo-menu-burger ${showLinks ? 'show-nav' : ''}`}>
          <h1>Coupe des 4 maisons</h1>
        </div>
        <div className="menu-close-burger" onClick={handleShowLinks}>
          ╳
        </div>

        <div className="menu-links">
          <NavLink
            className={classLinkColor}
            to="/"
          >
            Accueil
          </NavLink>

          <NavLink
            className={classLinkColor}
            to="/regles"
          >
            Règles
          </NavLink>

          <NavLink
            className={classLinkColor}
            to="/histoire"
          >
            Histoire des 4 maisons
          </NavLink>
        </div>

        {!isLogged && (
        <NavLink to="/login" className="menu-login" type="button">
          Se connecter
        </NavLink>
        )}

        {isLogged && (
        <NavLink to="/mon-compte" className="menu-login" type="button">
          Mon compte
        </NavLink>
        )}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  classColor: PropTypes.string.isRequired,
  classLinkColor: PropTypes.string.isRequired,
};

export default Navbar;
