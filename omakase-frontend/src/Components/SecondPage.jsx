import photo2 from '../assets/view2.jpg';
import Movie from '../assets/Movie.mp4';

function getPrevHref() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const isWithCss = path === '/ex_03b';
  return isWithCss ? '/ex_03' : '/ex_03_start';
}

const SecondPage = () => {
  return (
    <div>
      <div>
        <h1> Περισσότερα</h1>
        <p id='p2'>
          Ecce brevis paragraphus Latine: Vita humana plena est varietatis et mutationum, quae nobis et gaudium et
          difficultates afferunt. <strong>Sapientia non solum in libris invenitur</strong>, sed etiam in quotidianis
          rebus, ubi patientia et constantia virtutes maxime utiles sunt. Si quis veritatem diligenter quaerit, inveniet
          iter suum clarius fieri, sicut nox paulatim diluculo cedit. Amicitia autem animos sustentat et labores levat,
          dum una cum spe corda ad meliora movet. <a href={getPrevHref()}>προηγούμενη σελίδα</a>
        </p>
        <hr />
      </div>
      <div>
        <img id='s2d' src={photo2} width={300} height={300} alt='Θεα Βουνού - Τοπίο' />
        <hr />
      </div>
      <div>
        <h2>Προσοχή:</h2>
        <ol>
          <li>Χθές</li>
          <li>Σήμερα</li>
          <li>Αύριο</li>
        </ol>
      </div>
      <div>
        <video  width='320' height='240' controls>
          <source src={Movie} type='video/mp4' />
        </video>
      </div>
      <hr />
      <h5 style={{ fontFamily: 'Times New Roman' }}> ΠΑΜΑΚ ΕΠΜΣ ΑΣΕΛ</h5>
    </div>
  );
};

export default SecondPage;
