 import photo from '../assets/1735.jpg';
 import track from '../assets/Music.mp3';
 import './ask3.css';

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
        congue ut arcu ac fringilla. Μπορείτε να δειτε περισσότερο στην <a href='/second'> επόμενη σελίδα</a>
         </p>
        <img src={photo} width={300}height={300} alt='Εικόνα Θάλασσα - Βραχώδης Ακτή' />
        <hr/>
        </div>
        <div>
            <h1>Συζήτηση:</h1>
            <ul className='p_1'>
                <li> Θετικές προοπτικές</li>
                <li> Ενδεχόμενα προβλήματα</li>
            </ul>
            <hr/>
        </div>
        <div>
        <audio controls src={track} preload="metadata">
            Your browser does not support the audio element.
            <track kind="captions" />
    </audio>
    </div>
    <div>
        <pre>
            <hr/>
            <strong>Αποσπάσμα κώδικα css</strong>
            <p> protected void Button1_Click(object sender, EventArgs e)<br/>   
            </p>
        </pre>
    </div>
    <div>
        <hr/>
        <h5 className='h1_title' style={{fontFamily: 'Times New Roman'}} > ΠΑΜΑΚ ΕΠΜΣ ΑΣΕΛ</h5>
    </div>
    </div>
  ); 
    
};

export default FirstPage;