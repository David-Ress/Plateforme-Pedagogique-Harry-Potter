import './style.scss';

const Filter = () => (
  <div className="filter">
    <span className="filter-title">Filtrer: </span>
    <label className="filter-label" htmlFor="gryffindor">Gryffondor
      <input type="checkbox" id="gryffindor" name="gryffindor" />
      <span className="checkmark"> </span>
    </label>

    <label className="filter-label" htmlFor="slytherin">Serpentard
      <input type="checkbox" id="slytherin" name="slytherin" />
      <span className="checkmark"> </span>
    </label>

    <label className="filter-label" htmlFor="ravenclaw">Serdaigle
      <input type="checkbox" id="ravenclaw" name="ravenclaw" />
      <span className="checkmark"> </span>
    </label>

    <label className="filter-label" htmlFor="hufflepuff">Poufsouffle
      <input type="checkbox" id="hufflepuff" name="hufflepuff" />
      <span className="checkmark"> </span>
    </label>

  </div>
);

export default Filter;
