import '../style.scss';

const Winner = () => (
  <div className="winner-cup">
    <h2>Qui va gagner la <span className="text-bold">coupe des 4 maisons</span> cette année ? <span className="emoji">🧙</span></h2>
    <section className="animation">
      <div className="first"><div>Gryffondor</div></div>
      <div className="second"><div>Serpentard</div></div>
      <div className="third"><div>Serdaigle</div></div>
      <div className="fourth"><div>Poufsouffle</div></div>
    </section>
  </div>

);

export default Winner;
