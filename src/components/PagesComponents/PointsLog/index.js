import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogItem from './LogItem';
import Navbar from '../../ReusableComponents/Navbar';
import { fetchPoints } from '../../../api/points';
import './style.scss';

const PointsLog = () => {
  const pointList = useSelector((state) => state.addPoints.logPoints);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPoints());
    console.log(pointList);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Historique des points</title>
      </Helmet>
      <Navbar classColor="logo grey" classLinkColor="menu-link grey" classColorBurger="grey" />
      <div className="professor-interface-container">
        <h2 className="professor-interface-title"> Historique des points</h2>
        <NavLink to="/mon-compte" className="back-account">
          &#60; Retour à mon compte
        </NavLink>
        <div className="professor-interface">
          <div className="profesor-filter">
            <div className="professor-interface-top">
              {/* <div className="button-container">
                <NavLink to="/historique-des-points" type="button" className="select-button selected active">Elèves et maisons</NavLink>
                <NavLink to="/historique-des-points/eleves" type="button" className="select-button">Historique élèves</NavLink>
                <NavLink to="/historique-des-points/maisons" type="button" className="select-button">Historique maisons</NavLink>
              </div> */}
            </div>
          </div>
          <section className="log-container">
            <article className="log-item">
              <div className="log-date">Date</div>
              <div className="log-student-name">Elève</div>
              <div className="log-house-name">Maison</div>
              <div className="log-points">Points</div>
              <div className="log-reason">Motif</div>
              <div className="log-teacher">Professeur</div>
            </article>
            <div className="log-item-container">
              {pointList.map((point) => (
                <LogItem key={point.id} {...point} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>

  );
};

export default PointsLog;
