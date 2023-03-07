import PropTypes from 'prop-types';
import './style.scss';

const NavbarMobile = ({
  handleShowLinks,
  classColorBurger,
}) => (
  <div className={`menu-burger ${classColorBurger}`} onClick={handleShowLinks}>
    <span />
    <span />
    <span />
  </div>

);

NavbarMobile.propTypes = {
  handleShowLinks: PropTypes.func.isRequired,
  classColorBurger: PropTypes.string.isRequired,
};

export default NavbarMobile;
