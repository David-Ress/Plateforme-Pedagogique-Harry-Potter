import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import LoreDefault from './DefaultLore';
import LoreGryffindor from './Gryffindor';
import LoreHufflepuff from './Hufflepuff';
import LoreSlytherin from './Slytherin';
import LoreRavenclaw from './Ravenclaw';
import SigilElement from './SigilElement';
import gryffindorSigil from '../../assets/img/blason-gryffondor.png';
import slytherinSigil from '../../assets/img/blason-serpentard.png';
import ravenclawSigil from '../../assets/img/blason-serdaigle.png';
import hufflepuffSigil from '../../assets/img/blason-poufsouffle.png';
import './style.scss';

const Lore = () => {
  const [selectedHouse, setSelectedHouse] = useState('default');
  const handleClickOnSigil = (event) => {
    setSelectedHouse(event.target.alt);
  };
  return (
    <div>
      <Helmet>
        <title>
          Histoire des 4 maisons
        </title>
      </Helmet>
      <Header />
      <div className="lore-wrapper">
        <h2 className="lore-title">Bienvenue à Poudlard!</h2>
        <ul className="house-sigils">
          {/* Liste des props pour SigilElement: img, name */}
          <SigilElement
            img={gryffindorSigil}
            name="Gryffondor"
            handleClickOnSigil={handleClickOnSigil}
            selectedHouse={selectedHouse}
            selected={selectedHouse === 'Gryffondor'}
          />
          <SigilElement
            img={slytherinSigil}
            name="Serpentard"
            handleClickOnSigil={handleClickOnSigil}
            selectedHouse={selectedHouse}
            selected={selectedHouse === 'Serpentard'}
          />
          <SigilElement
            img={ravenclawSigil}
            name="Serdaigle"
            handleClickOnSigil={handleClickOnSigil}
            selectedHouse={selectedHouse}
            selected={selectedHouse === 'Serdaigle'}
          />
          <SigilElement
            img={hufflepuffSigil}
            name="Poufsouffle"
            handleClickOnSigil={handleClickOnSigil}
            selectedHouse={selectedHouse}
            selected={selectedHouse === 'Poufsouffle'}
          />
        </ul>
        <div className="house-lore">
          <div className="house-lore__mid-border">
            <div className="house-lore__inner-border">
              {selectedHouse === 'default' && <LoreDefault />}
              {selectedHouse === 'Serpentard' && <LoreSlytherin />}
              {selectedHouse === 'Poufsouffle' && <LoreHufflepuff />}
              {selectedHouse === 'Serdaigle' && <LoreRavenclaw />}
              {selectedHouse === 'Gryffondor' && <LoreGryffindor />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lore;
