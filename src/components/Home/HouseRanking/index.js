import { useSelector } from 'react-redux';
import HourGlass from './Hourglass';
// import houseData from '../../../db/houses.json';
import './style.scss';

const HouseRanking = () => {
  const houseData = useSelector((state) => state.house.list);
  // Cet array contient les données de points de nos maisons
  const housePoints = houseData.map((house) => (
    parseInt(house.houses_total_score, 16)
  ));

  const totalPoints = housePoints.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
  return (
    <div className="house-ranking">
      <h2 className="ranking-type">
        Classement des 4 maisons
      </h2>
      <div className="ranking-container">
        {houseData.map((house, index) => (
          <HourGlass key={house.id} {...house} nameInEnglish={house.name_in_english} rank={index + 1} percentage={((house.houses_total_score / totalPoints) * 100)} />
        ))}
      </div>
    </div>
  );
};

export default HouseRanking;
