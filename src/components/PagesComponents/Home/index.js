import { Helmet } from 'react-helmet';
import Winner from '../../ReusableComponents/Header/Winner';
import Header from '../../ReusableComponents/Header';
import WizardRanking from './WizardRanking';
import HouseRanking from './HouseRanking';

const Home = () => (
  <div className="home">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Accueil</title>
    </Helmet>
    <Header component={<Winner />} />
    <HouseRanking />
    <WizardRanking />
  </div>

);

export default Home;
