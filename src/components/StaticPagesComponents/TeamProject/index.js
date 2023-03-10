import { Helmet } from 'react-helmet';
import Header from '../../ReusableComponents/Header';
import Gigi from '../../../assets/img/gigi.jpg';
import David from '../../../assets/img/david.jpg';
import JM from '../../../assets/img/JM.jpg';
import Laurie from '../../../assets/img/laurie.jpg';
import Mathieu from '../../../assets/img/mathieu.jpg';
import github from '../../../assets/img/github.png';
import linkedin from '../../../assets/img/linkedin.png';
import './style.scss';

const TeamProject = () => (
  <div>
    <Helmet>
      <title>Equipe projet</title>
    </Helmet>
    <Header />
    <h1 className="team-project-h1">
      Equipe projet
    </h1>
    <h2 className="team-project-h2">
      Ce projet a été réalisé avec ♥ par :
    </h2>
    <div className="article-container">
      <article className="article">
        <img className="article-img" src={David} alt="David Ressicaud" />
        <h1 className="article-title">David Ressicaud</h1>
        <h2>aka Rubeus Hagrid</h2>
        <a className="article-link" href="https://www.linkedin.com/in/david-ressicaud/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin" /></a>
        <a className="article-link" href="https://github.com/David-Ress" target="_blank" rel="noreferrer"><img src={github} alt="Git hub" /></a>
      </article>
      <article className="article">
        <img className="article-img" src={Laurie} alt="Laurie Musson" />
        <h1 className="article-title">Laurie Musson</h1>
        <h2>aka Luna Lovegood</h2>
        <a className="article-link" href="https://www.linkedin.com/in/laurie-shamseldin/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin" /></a>
        <a className="article-link" href="https://github.com/LaurieShamseldin" target="_blank" rel="noreferrer"><img src={github} alt="Git hub" /></a>
      </article>
      <article className="article">
        <img className="article-img" src={Gigi} alt='Erwan "Gigi" Créoff' />
        <h1 className="article-title">Erwan "Gigi" Créoff</h1>
        <h2>aka Severus Rogue</h2>
        <a className="article-link" href="https://www.linkedin.com/in/erwan-creoff/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin" /></a>
        <a className="article-link" href="https://github.com/Gigi-Erwan-C" target="_blank" rel="noreferrer"><img src={github} alt="Git hub" /></a>
      </article>
      <article className="article">
        <img className="article-img" src={JM} alt="Jean-Matthieu Laffargue" />
        <h1 className="article-title">Jean-Matthieu Laffargue</h1>
        <h2>aka Albus Dumbledore</h2>
        <a className="article-link" href="https://www.linkedin.com/in/jm-laffargue/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin" /></a>
        <a className="article-link" href="https://github.com/JM-Laffargue" target="_blank" rel="noreferrer"><img src={github} alt="Git hub" /></a>
      </article>
      <article className="article">
        <img className="article-img" src={Mathieu} alt="Mathieu Moye" />
        <h1 className="article-title">Mathieu Moye</h1>
        <h2>aka Drago Malefoy</h2>
        <a className="article-link" href="https://www.linkedin.com/in/mathieumoye/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin" /></a>
        <a className="article-link" href="https://github.com/MathieuMoye" target="_blank" rel="noreferrer"><img src={github} alt="Git hub" /></a>
      </article>

    </div>
  </div>
);

export default TeamProject;
