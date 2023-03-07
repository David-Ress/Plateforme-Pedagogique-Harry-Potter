import PropTypes from 'prop-types';
import './style.scss';

const Logo = ({
  classColor,
}) => (
  <a href="/" className={classColor}>
    <h1>Coupe des 4 maisons</h1>
  </a>
);

Logo.propTypes = {
  classColor: PropTypes.string.isRequired,
};

export default Logo;
