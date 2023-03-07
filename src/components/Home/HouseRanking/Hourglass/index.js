import PropTypes from 'prop-types';
import './style.scss';

const Hourglass = ({
  houses_total_score, name, nameInEnglish, rank, percentage,
}) => {
  const houseNameLowercase = typeof nameInEnglish === 'string' ? nameInEnglish.toLowerCase() : '';
  const houseNameNormal = typeof nameInEnglish === 'string' ? nameInEnglish.toUpperCase() : '';
  const firstLetter = Array.from(houseNameNormal)[0];
  const generateKeyframes = () => `
      @keyframes points${firstLetter} {
        0% {
          height: 0%;
        }
        100% {
          height: ${percentage}%;
        }
      }
    `;
  return (
    <div className="hogwarts">
      <div className="score">
        <p>{rank}</p>
      </div>
      <div className="hourglass-container">
        <div className={`hourglass ${houseNameLowercase}`}>
          <style>{generateKeyframes()}</style>
          <div className="top">
            <div className="points" />
          </div>
          <div className="middle" />
          {/* <div className="bottom-first" /> */}
          <div className="bottom-second">
            <div className="points" />
          </div>
        </div>
      </div>
      <div className="top-bottom">
        <h3 className="current-points">{houses_total_score} points</h3>
        {/* <span className="gained-points">(+ {0} points depuis [DATE])</span> */}
        <h2 className="house-name">{name}</h2>
        <span className="house-name__english">{nameInEnglish}</span>
      </div>
    </div>
  );
};

Hourglass.propTypes = {
  rank: PropTypes.number,
  houses_total_score: PropTypes.string,
  name: PropTypes.string,
  nameInEnglish: PropTypes.string,
  percentage: PropTypes.number,
};

export default Hourglass;
