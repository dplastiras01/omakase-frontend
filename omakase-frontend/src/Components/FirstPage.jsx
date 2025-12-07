import photo from '../assets/1735.jpg';
import track from '../assets/Music.mp3';

function getNextHref() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const isWithCss = path === '/ex_03' || path === '/ex_03b';
  return isWithCss ? '/ex_03b' : '/ex_03b_start';
}

const FirstPage = () => {
  return (
    <div>
      <div>
        <h1 className='h1_title'>Θάλασσα - Βραχώδης Ακτή</h1>
        <p className='p_1'>
          <strong>Morbi pretium quis </strong> lectus nec veneantis. Fusce id vehicula turpis, vehicula tristique magna.
          <a href='https://essd.uom.gr'>ΕΠΜΣ: Ανάπτυξη Επιχειρησιακών Συστημάτων </a>
          is orci nisl, sollicitudin ut varius vel, hendrerit. Interger mauris dui, posuere eu lectus in, mattis egestas
          enim. Nunc et luctus nisi. Cras finibus ligula purus, <i> vitae vestibulum dolor congue vitae</i> Pellentesque
          congue ut arcu ac fringilla. Μπορείτε να δειτε περισσότερο στην <a href={getNextHref()}>επόμενη σελίδα</a>
        </p>
      </div>
      <div>
        <a href='https://www.w3schools.com' target='_blank' rel='noopener noreferrer'>
          <img src={photo} width={300} height={300} alt='Εικόνα Θάλασσα - Βραχώδης Ακτή' />
        </a>
      </div>
      <div>
        <h1>Συζήτηση:</h1>
        <ul className='p_1'>
          <li> Θετικές προοπτικές</li>
          <li> Ενδεχόμενα προβλήματα</li>
        </ul>
        <hr />
      </div>
      <div>
        <audio controls src={track} preload='metadata'>
          Your browser does not support the audio element.
          <track kind='captions' />
        </audio>
      </div>
      <div>
        <pre>
          <hr />
          <strong>Αποσπάσμα κώδικα css</strong>
          <pre>
            protected void Button1_Click(object sender, EventArgs e)
            <br />
            {'{'}
            <br />
            {'    '}string st = ws.Helloworld();
            <br />
            {'    '}Label1.Text = st;
            <br />
            {'}'}
            <br />
          </pre>
        </pre>
      </div>
      <div>
        <hr />
        <h5 className='h1_title' style={{ fontFamily: 'Times New Roman' }}>
          {' '}
          ΠΑΜΑΚ ΕΠΜΣ ΑΣΕΛ
        </h5>
      </div>
    </div>
  );
};

export default FirstPage;
