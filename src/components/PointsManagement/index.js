import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import Navbar from '../Navbar';
import Sort from '../Sort';
import './style.scss';
import FilterMobile from '../Filter/FilterMobile';

const PointsManagement = ({ component, selectedStudent, selectedHouse, page }) => {
  const [showFilter, setShowFilter] = useState(false);
  const handleShowFilter = () => {
    console.log(showFilter);
    setShowFilter(!showFilter);
  };

  return (
    <div>
      <Helmet>
        <title>Gestion des points</title>
      </Helmet>
      <Navbar classColor="logo grey" classLinkColor="menu-link grey" classColorBurger="grey" />
      <div className={`professor-interface-container ${page} ${showFilter ? 'show-filter' : ''}`}>
        <h2 className="professor-interface-title">Gestion des points</h2>
        <div className="professor-interface">
          <FilterMobile handleShowFilter={handleShowFilter} />
          <div className="profesor-filter">
            <div className="professor-interface-top">
              {showFilter && (
                <div className="header-filter">
                  <div className="close-filter" onClick={handleShowFilter}>
                    ╳
                  </div>
                  Filtrer par
                </div>
              )}
              <div className="button-container">
                {showFilter && (
                  <div className="filter-category">
                    Catégorie
                  </div>
                )}

                <NavLink to="/classement/eleves" type="button" className={`select-button ${selectedStudent}`}>Les élèves</NavLink>
                <NavLink to="/classement/maisons" type="button" className={`select-button ${selectedHouse}`}>Les maisons</NavLink>
              </div>
              <div className="filter-sort">
                {showFilter && (
                  <div className="filter-category">
                    Tri
                  </div>
                )}
                <Sort />
              </div>
            </div>
            {showFilter && (
              <div className="filter-category house">
                Les maisons
              </div>
            )}
            <Filter />
          </div>
          <div className="filter-validation">
            <button type="button" onClick={handleShowFilter}>
              Valider
            </button>
          </div>
          <div>
            {component}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PointsManagement;

PointsManagement.propTypes = {
  component: PropTypes.any.isRequired,
  selectedStudent: PropTypes.string,
  selectedHouse: PropTypes.string,
  page: PropTypes.string.isRequired,
};

PointsManagement.defaultProps = {
  selectedStudent: null,
  selectedHouse: null,
};
