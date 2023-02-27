import { bool, func, string } from 'prop-types';

const SigilElement = ({
  img, name, handleClickOnSigil, selected,
}) => (

  <li>
    <img className={selected ? 'image__selected' : 'image'} src={img} onClick={handleClickOnSigil} alt={name} />
    <h3 className="house-name"> {name} </h3>
  </li>
);

export default SigilElement;

SigilElement.propTypes = {
  name: string.isRequired,
  img: string.isRequired,
  handleClickOnSigil: func.isRequired,
  selected: bool.isRequired,
};
