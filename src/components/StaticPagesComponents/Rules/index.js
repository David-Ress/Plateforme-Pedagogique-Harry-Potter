import { Helmet } from 'react-helmet';
import Header from '../../ReusableComponents/Header';
import './style.scss';
import rule1 from '../../../assets/img/regle-1.jpg';
import rule2 from '../../../assets/img/regle-2.jpg';
import rule3 from '../../../assets/img/regle-3.jpg';
import rule4 from '../../../assets/img/regle-4.jpg';
import rule5 from '../../../assets/img/regle-5.jpg';
import rule6 from '../../../assets/img/regle-6.jpg';

const Rules = () => (
  <div className="page-rules">
    <Helmet>
      <title>Règles</title>
    </Helmet>
    <Header />
    <div className="rules">
      <h1>Les droits des sorciers</h1>
      <div className="rules-item">

        <section className="accordion">
          <input type="checkbox" name="collapse" id="handle1" />
          <h2 className="handle">
            <label htmlFor="handle1">1. Fonctionnement général</label>
          </h2>
          <div className="content rules-item-content">
            <img className="rules-img-left" src={rule1} alt="Regle n°1" />
            <div className="rules-item-content-text">
              <p>
                Chers sorciers,
                Vous allez évoluer cette année dans
                l’univers d’Harry Potter. En effet, vous
                allez devoir défendre votre maison et ses
                couleurs ! Voici quelques explications sur
                cet univers.
              </p>

              <p>
                D’abord, les élèves sont répartis en fonction de leur personnalité
                dans chacune des maisons de la célèbre saga.
                Les points s’attribuent de la même manière que dans les films.
                oLes moyennes générales des élèves chaque trimestre se
                transformeront en points pour leur maison respective
                Les appréciations du trimestre rapporteront aussi des points si
                elles sont positives mais en feront perdre si elles sont négatives
                oLes points seront régulièrement mis à jour sur le site internet
                de l’EREA : https://ereatruffaut.wordpress.com/
                A la fin de l’année, le total des 4 maisons sera additionné. En
                fonction des résultats de la classe, vous obtiendrez des
                récompenses.
              </p>

              <p>
                Le but de ce projet de classe est de favoriser l’entraide ainsi que de
                développer la motivation des élèves.
                Plusieurs remarques sont tout de même à prendre en considération :
                <ul>
                  <li>Remarque 1 :    Tous les professeurs qui enseignent dans la classe ne
                    participeront pas à l’aventure. Toutefois, les points obtenus pour
                    chaque cours rapportent des points pour votre maison à chaque fin
                    de trimestre ! Le travail pour le cours d’anglais (par exemple) ne doit
                    donc pas être favorisé par rapport aux autres matières.
                  </li>
                  <li>Remarque 2    : Si un élève ne participe/travaille pas dans un cours
                    dont l’enseignant ne fait pas partie de l’aventure, il sera sanctionné
                    et fera perdre des points à sa maison.
                  </li>
                  <li>
                    Remarque 3 :    Ceci est un jeu. Si la confrontation des maisons
                    entraine des disputes, le jeu sera tout simplement arrêté.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        <section className="accordion">
          <input type="checkbox" name="collapse" id="handle2" />
          <h2 className="handle">
            <label htmlFor="handle2">2. Gagner et perdre des points</label>
          </h2>
          <div className="content rules-item-content">
            <div className="rules-item-content-text">
              <p>
                Au cours de l’année, il y aura plusieurs façons
                de gagner ou de perdre des points.
                Si tu gagnes des points individuellement, ils
                compteront pour toi et ta maison.
                Parfois, l’activité se réalisera directement avec
                ta maison, à ce moment, les points iront
                directement à ta maison.
              </p>

              <p>
                <div className="wizard-points-explanations">
                  <div className="table">
                    <div className="row row-header">
                      <div className="cell">Barème indicatif des points</div>
                    </div>
                    <div className="row">
                      <div className="cell">+3 Je rends un devoir à temps</div>
                      <div className="cell" />
                    </div>
                    <div className="row">
                      <div className="cell">+5 Je participe activement </div>
                      <div className="cell">-3 Je bavarde / Je suis vulgaire sans
                        présenter mes excuses ou me
                        reprendre
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell">+5 J’aide un camarade qui en a besoin (tutorat) </div>
                      <div className="cell">-3 J’oublie mon matériel
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell">+5 J’ai fais mes devoirs sérieusement  </div>
                      <div className="cell">-3 Je n’ai pas fait mes devoirs
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell">+5 Je suis fair-play  </div>
                      <div className="cell">-3 Je me déplace sans autorisation
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell">+5 Je travaille en autonomie calmement </div>
                      <div className="cell">-3 Je suis en retard sans justification
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell" />
                      <div className="cell">-3 Je suis agité dans les couloirs / en entrant en classe
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell"> </div>
                      <div className="cell">-3 Je laisse des papiers par terre / Je
                        dégrade le matériel de l’établissement
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell">+5 J’emprunte et je lis un livre du CDI </div>
                      <div className="cell">-3 J’oublie de rendre à temps un livre du CDI
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell">+5 Je passe un niveau sur Pix </div>
                      <div className="cell" />
                    </div>
                    <div className="row">
                      <div className="cell">+10 Je règle une situation de conflit sans l’intervention d’un adulte </div>
                      <div className="cell" />
                    </div>
                    <div className="row">
                      <div className="cell">+10 Je travaille en groupe de manière efficace et calme
                      </div>
                      <div className="cell">-10 Je suis exclu de la classe.</div>
                    </div>
                  </div>
                </div>
              </p>

              <ul>
                <li>
                  Remarque 1: Je peux tout à fait perdre des points à cause d’un
                  devoir non-fait (-3) mais me rattraper si je participe activement en
                  classe (+5)
                </li>
                <li>
                  Remarque 2: Chaque enseignant est, comme dans les films, libre de
                  distribuer des points comme bon lui semble et n’est pas dans
                  l’obligation d’accorder ou de retirer des points selon le tableau.
                  Celui-ci reste indicatif.
                </li>
              </ul>
            </div>
            <img className="rules-img-right" src={rule2} alt="Regle n°2" />
          </div>
        </section>

        <section className="accordion">
          <input type="checkbox" name="collapse" id="handle3" />
          <h2 className="handle">
            <label htmlFor="handle3">3. Répartition des sorciers</label>
          </h2>
          <div className="content rules-item-content">
            <img className="rules-img-left" src={rule3} alt="Regle n°3" />
            <div className="rules-item-content-text">
              <p>
                Cette partie n'est pas encore finie, plus de nouvelles bientôt!
              </p>

            </div>
          </div>
        </section>

        <section className="accordion">
          <input type="checkbox" name="collapse" id="handle4" />
          <h2 className="handle">
            <label htmlFor="handle4">4. Les duels de Sorciers</label>
          </h2>
          <div className="content rules-item-content">
            <div className="rules-item-content-text">
              <p>
                Pendant le cours d’anglais, le duel de sorciers
                sera quelque peu différent par rapport aux
                films ! La force physique n’intervient pas, seule
                la « force mentale » compte. Par exemple : Le
                professeur lance un thème étudié lors des
                séances précédentes et forme des duels entre
                des élèves de maisons différentes. Le premier
                qui répond correctement remporte le duel. Des
                points sont évidemment attribués aux
                vainqueurs et à leur maison.
              </p>

            </div>
            <img className="rules-img-right" src={rule4} alt="Regle n°4" />
          </div>
        </section>

        <section className="accordion">
          <input type="checkbox" name="collapse" id="handle5" />
          <h2 className="handle">
            <label htmlFor="handle5">5. Les paliers de classe</label>
          </h2>
          <div className="content rules-item-content">
            <img className="rules-img-left" src={rule5} alt="Regle n°5" />
            <div className="rules-item-content-text">
              <p>
                Les 4 maisons sont à la fois en compétition
                et en collaboration ! Le but de ce projet
                est aussi de développer vos aptitudes
                d’entraide au sein de la classe et il est
                donc intéressant pour tout le monde que
                toutes les maisons gagnent des points !
                Pour savoir si vous avez débloqué une
                récompense, il suffit d’additionner les
                points totaux des 4 maisons !
              </p>

              <p>
                <div className="wizard-points-explanations">
                  <div className="table">
                    <div className="row row-header">
                      <div className="cell">Nombre de points requis</div>
                      <div className="cell">Récompenses</div>
                    </div>
                    <div className="row">
                      <div className="cell">1,000 pts</div>
                      <div className="cell"> « Boule de Noël » Vif d’Or </div>
                    </div>
                    <div className="row">
                      <div className="cell">2,500 pts </div>
                      <div className="cell">-Avis de recherche personnalisé </div>
                    </div>
                    <div className="row">
                      <div className="cell">4,500 pts </div>
                      <div className="cell">Cravate aux couleurs des maisons
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell">5,500 pts  </div>
                      <div className="cell">Escape Game en fin d’année
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell">6,500 pts  </div>
                      <div className="cell">Baguette de sorcier
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell">7,500 pts </div>
                      <div className="cell">Œuf de dragon
                      </div>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </section>

        <section className="accordion">
          <input type="checkbox" name="collapse" id="handle6" />
          <h2 className="handle">
            <label htmlFor="handle6">6. Mon aventure</label>
          </h2>
          <div className="content rules-item-content">
            <div className="rules-item-content-text">
              <p>
                Cette partie n'est pas encore finie, plus de nouvelles bientôt!
              </p>

            </div>
            <img className="rules-img-right" src={rule6} alt="Regle n°6" />
          </div>
        </section>

      </div>
    </div>
  </div>

);

export default Rules;
