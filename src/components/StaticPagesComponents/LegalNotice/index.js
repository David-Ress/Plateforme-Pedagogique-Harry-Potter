import { Helmet } from 'react-helmet';
import Header from '../../ReusableComponents/Header';
import './style.scss';

const LegalNotice = () => (
  <div className="legal-notice-container">
    <Helmet>
      <title>Mentions Légales</title>
    </Helmet>
    <Header />
    <h2>Mentions legales</h2>
    <h3>Propriété intellectuelle</h3>

    <p>
      https://coupe-des-4-maisons-beta.netlify.app/ est un site Internet pédagogique sur le thème <span>Harry Potter</span> à but non lucratif, édité par
      les étudiants de la formation o'clock. Il n’est en aucun cas affilié à <span>J.K. Rowling</span>,<span>Scholastic</span>,<span> Bloomsbury</span>,<span>Gallimard</span> ou <span>Time Warner Entertainment</span>.
    </p>
    <p>
      « <span>Harry Potter</span> » et toutes les marques dérivées sont propriété et copyright de <span>Warner Bros</span> et de
      <span>J.K.
        Rowling
      </span>. Les autres marques citées sur ce site sont déposées par les sociétés qui en sont propriétaires.
      L’ensemble de ce site est soumis au droit français.
    </p>
    <p className="margin-bottom">Sauf mention contraire, tous les éléments accessibles sur le site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.)
      restent la propriété exclusive de leurs auteurs, en ce qui concerne les droits de propriété intellectuelle ou les droits d’usage.
      Toute reproduction, représentation, modification, publication, adaptation de tout
      ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l’auteur.23
      Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient est considérée comme constitutive d’une contrefaçon et
      passible de poursuites.
      Les marques et logos reproduits sur le site sont déposés par les sociétés qui en sont propriétaires.
    </p>
  </div>
);

export default LegalNotice;
