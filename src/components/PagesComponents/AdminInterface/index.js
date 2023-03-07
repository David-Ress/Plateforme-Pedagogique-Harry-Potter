import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { filterAllStudentAdmin } from '../../../store/reducers/adminStudent';
import Navbar from '../../ReusableComponents/Navbar';
import FilterMobile from '../../ReusableComponents/Filter/FilterMobile';

const AdminInterface = ({
  component, selectedStudent, selectedTeacher, page, sortComponent,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedHouses, setSelectedHouses] = useState([]);
  const studentData = useSelector((state) => state.adminStudent.studentList);
  const dispatch = useDispatch();
  const handleShowFilter = () => {
    console.log(showFilter);
    setShowFilter(!showFilter);
  };

  const handleCheckboxChange = (event) => {
    const house = event.target.value;
    console.log(house);
    setSelectedHouses((prevSelectedHouses) => {
      if (prevSelectedHouses.includes(house)) {
        return prevSelectedHouses.filter((selectdHouse) => selectdHouse !== house);
      }

      return [...prevSelectedHouses, house];
    });
  };

  const filteredStudents = selectedHouses.length > 0
    ? studentData.filter((student) => selectedHouses.includes(student.house_name))
    : studentData;

  dispatch(filterAllStudentAdmin(filteredStudents));

  return (
    <div>
      <Navbar classColor="logo grey" classLinkColor="menu-link grey" classColorBurger="grey" />
      <div className={`professor-interface-container ${page} ${showFilter ? 'show-filter' : ''}`}>
        <h2 className="professor-interface-title">Interface administrateur</h2>
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
                <NavLink to="/admin/eleves" type="button" className={`select-button ${selectedStudent}`}>Les élèves</NavLink>
                <NavLink to="/admin/utilisateurs" type="button" className={`select-button ${selectedTeacher}`}>Les profs</NavLink>
              </div>
              <div className="filter-sort">
                {showFilter && (
                  <div className="filter-category">
                    Tri
                  </div>
                )}
                {sortComponent}
              </div>
            </div>
            {showFilter && (
              <div className="filter-category house">
                Les maisons
              </div>
            )}
            <div className="filter">
              <span className="filter-title">Filtrer: </span>
              <label className="filter-label" htmlFor="gryffindor">Gryffondor
                <input type="checkbox" id="gryffindor" name="gryffindor" value="Gryffondor" checked={selectedHouses.includes('Gryffondor')} onChange={handleCheckboxChange} />
                <span className="checkmark"> </span>
              </label>

              <label className="filter-label" htmlFor="slytherin">Serpentard
                <input type="checkbox" id="slytherin" name="slytherin" value="Serpentard" checked={selectedHouses.includes('Serpentard')} onChange={handleCheckboxChange} />
                <span className="checkmark"> </span>
              </label>

              <label className="filter-label" htmlFor="ravenclaw">Serdaigle
                <input type="checkbox" id="ravenclaw" name="ravenclaw" value="Serdaigle" checked={selectedHouses.includes('Serdaigle')} onChange={handleCheckboxChange} />
                <span className="checkmark"> </span>
              </label>

              <label className="filter-label" htmlFor="hufflepuff">Poufsouffle
                <input type="checkbox" id="hufflepuff" name="hufflepuff" value="Poufsouffle" checked={selectedHouses.includes('Poufsouffle')} onChange={handleCheckboxChange} />
                <span className="checkmark"> </span>
              </label>
            </div>
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
export default AdminInterface;

AdminInterface.propTypes = {
  component: PropTypes.object.isRequired,
  selectedStudent: PropTypes.string,
  selectedTeacher: PropTypes.string,
  page: PropTypes.string.isRequired,
  sortComponent: PropTypes.object.isRequired,
};

AdminInterface.defaultProps = {
  selectedStudent: null,
  selectedTeacher: null,
};
