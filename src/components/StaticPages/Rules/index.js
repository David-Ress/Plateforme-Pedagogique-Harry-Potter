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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, ipsum quis condimentum blandit,
                urna quam iaculis dolor, nec laoreet lacus ex nec augue. Maecenas placerat purus varius augue lobortis elementum.
                Praesent dignissim magna a mauris pharetra varius
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
