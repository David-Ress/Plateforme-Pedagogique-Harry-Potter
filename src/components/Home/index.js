import { Helmet } from 'react-helmet';
import Header from '../Header';
import WizardRanking from './WizardRanking';
import HouseRanking from './HouseRanking';

const Home = () => (
  <div className="home">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Accueil</title>
    </Helmet>
    <Header />
    <HouseRanking />
    <WizardRanking />
  </div>

);

export default Home;
