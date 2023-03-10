import './style.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import House from './House';

const PointsHouse = () => {
  const [activeHouseId, setActiveHouseId] = useState(null);
  const [removeHouseId, setRemoveHouseId] = useState(null);
  const houseData = useSelector((state) => state.house.sortedList);
  const successMessage = useSelector((state) => state.addPoints.successMessage);

  const toggleAddPoint = (studentId) => {
    setActiveHouseId((prevId) => (prevId === studentId ? null : studentId));
    setRemoveHouseId((null));
  };

  const toggleDeletePoint = (studentId) => {
    setRemoveHouseId((prevId) => (prevId === studentId ? null : studentId));
    setActiveHouseId((null));
  };

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
          showAdd={house.id === activeHouseId}
          toggleAddPoint={toggleAddPoint}
          showDelete={house.id === removeHouseId}
          toggleDeletePoint={toggleDeletePoint}
        />
      ))}

    </div>
  );
};

export default PointsHouse;
