import { NavLink } from 'react-router-dom';

import Logo from '../Logo';

import './style.scss';

const Footer = () => (
  <footer className="footer">
    <Logo classColor="logo grey" />
    <div className="footer-links">

      <NavLink
        className="footer-link"
        to="/a-propos"
      >
        A propos
      </NavLink>

      <NavLink
        className="footer-link"
        to="/equipe-projet"
      >
        Equipe technique
      </NavLink>

      <NavLink
        className="footer-link"
        to="/mentions-legales"
      >
        Mentions légales
      </NavLink>

    </div>
  </footer>

);

export default Footer;
