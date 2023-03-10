import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import Header from '../../ReusableComponents/Header';
import './style.scss';

const AboutPage = () => (
  <div className="about-container">
    <Helmet>
      <title>A propos</title>
    </Helmet>
    <Header />
    <h2>A propos</h2>
    <h3>Quel est ce site?</h3>
    <p> "La coupe des 4 maisons" est une plateforme pédagogique crée par 5 étudiants en reconversion de l'école "O'Clock" dans le cadre d'un projet de fin de formation. Cette plateforme a été
      conçu gratuitement pour les professeurs et les élèves de l'EREA François Truffaut (28300 MAINVILLIERS) dans le cadre de leur projet scolaire sur le thème de Harry Potter.
    </p>
    <h3>Quel est le principe?</h3>
    <p> Une coupe des 4 maisons est organisée pendant l'année scolaire par l'équipe pédagogique de l'EREA François Truffaut (28300 MAINVILLIERS) dans laquelle les élèves sont affiliés
      à des maisons et peuvent gagner ou perdre des points selon leur actions (pour plus de détails, c'est <strong><NavLink to="/regles">ici</NavLink></strong> ).
    </p>
  </div>
);

export default AboutPage;
