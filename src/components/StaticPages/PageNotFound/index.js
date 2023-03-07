import Navbar from '../../ReusableComponents/Navbar';
import gif404 from '../../../assets/img/404.gif';

import './style.scss';

const PageNotFound = () => (
  <div className="container page-not-found">
    <Navbar classColor="logo grey" classLinkColor="menu-link grey" classColorBurger="grey" />
    <h1 className="error-title">Page <span className="error-font">4</span>0<span className="error-font">4</span></h1>
    <p className="error-text">Zone interdite aux moldus</p>
    <img className="error-img" src={gif404} alt="Malefoy scared" />
  </div>
);

export default PageNotFound;
