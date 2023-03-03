import './style.scss';
import { useSelector } from 'react-redux';
import House from './House';
// import houseData from '../../db/houses.json';

const PointsHouse = () => {
  const houseData = useSelector((state) => state.house.sortedList);
  const successMessage = useSelector((state) => state.addPoints.successMessage);

  return (
    <div className="points-management-recipient">
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
      {houseData.map((house, index) => (
        <House
          key={house.id}
          {...house}
          houseName={house.name}
          rank={index + 1}
        />
      ))}

    </div>
  );
};

export default PointsHouse;
