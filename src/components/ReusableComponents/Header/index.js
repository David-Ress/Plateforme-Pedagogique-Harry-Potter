import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import './style.scss';

const Header = ({
  component,
}) => (
  <header className="header">
    <Navbar classColor="logo white" classLinkColor="menu-link white" classColorBurger="white" />
    {component}
  </header>

);

export default Header;

Header.propTypes = {
  component: PropTypes.object,
};
 