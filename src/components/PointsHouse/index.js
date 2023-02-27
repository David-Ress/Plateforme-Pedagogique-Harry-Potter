import './style.scss';
import House from './House';
import houseData from '../../db/houses.json';

const PointsStudents = () => (
  <div className="points-management-recipient">
    {houseData.map((house, index) => (
      <House
        key={house.id}
        {...house}
        rank={index + 1}
      />
    ))}

  </div>
);

export default PointsStudents;
