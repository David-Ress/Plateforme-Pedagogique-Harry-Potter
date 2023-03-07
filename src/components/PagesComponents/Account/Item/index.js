// == Import : npm
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local
import './style.scss';

// == Composant
const Item = ({
  link,
  name,
  image,
}) => (
  <NavLink to={link}>
    <div className="account-list-item">
      <img className="account-list-item-img" src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  </NavLink>
);

Item.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// == Export
export default Item;
