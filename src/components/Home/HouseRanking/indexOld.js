import HourGlass from './Hourglass';
import './style.scss';

const HouseRanking = () => {
  // Cet array contient les données de points de nos maisons
  const housePoints = [
    { points: 1000 },
    { points: 250 },
    { points: 100 },
    { points: 300 },
  ];
  // On utilise reduce pour ajouter tout les points entre eux
  const totalPoints = housePoints.reduce((acc, curr) => acc + curr.points, 0);

  return (
    <div className="house-ranking">
      <h2 className="ranking-type">
        Classement des 4 maisons
      </h2>
      {
      // Il faudra mapper sur un array correspondant aux maisons  pour générer les sabliers avec les classements.
      // Pour l'instant, on les génère en dur:
    }

      <div className="ranking-container">
        <HourGlass
          rank={1}
          // on prend les points dans l'index [0] de notre array points
          points={housePoints[0].points}
          // On effectue un calcul avec le total des points pour générer un pourcentage
          percentage={((housePoints[0].points / totalPoints) * 100)}
          pointsSinceLastTick={55}
          house="Gryffondor"
          houseInEnglish="Gryffindor"
          totalPoints={totalPoints}
        />
        <HourGlass
          rank={2}
          points={housePoints[1].points}
          percentage={(housePoints[1].points / totalPoints) * 100}
          pointsSinceLastTick={20}
          house="Serpentard"
          houseInEnglish="Slytherin"
          totalPoints={totalPoints}
        />
        <HourGlass
          rank={3}
          points={housePoints[2].points}
          percentage={(housePoints[2].points / totalPoints) * 100}
          pointsSinceLastTick={50}
          house="Serdaigle"
          houseInEnglish="Ravenclaw"
          totalPoints={totalPoints}
        />
        <HourGlass
          rank={4}
          points={housePoints[3].points}
          percentage={(housePoints[3].points / totalPoints) * 100}
          pointsSinceLastTick={0}
          house="Poufsouffle"
          houseInEnglish="Hufflepuff"
          totalPoints={totalPoints}
        />
        {
          // console.log(pointsArray)
        // Liste des props à passer à HourGlass:
        // rank (number), points(number), pointsSinceLastTick(number), house(string), houseInEnglish(string),
      }
      </div>

      {
      // Il faudra passer en props les noms des maisons, le nombre de points, les points obtenu au cours du dernier mois. Eventuellement le className aussi.
     }
    </div>
  );
};

export default HouseRanking;
