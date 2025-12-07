import { useNavigate } from 'react-router-dom';
import './homepage.css';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className='home-page'>
      <div className='homeContainer'>
        <h1 className='h1_hp'>Eπιλέξτε ερώτημα</h1>

        <div className='ButtonContainer'>
          <button type='button' className='hp_button' onClick={() => navigate('/ex_03_start')}>
            Ερωτήματα 1 και 2 - Η σελίδα χωρις μοφοποίηση CSS
          </button>

          <button type='button' className='hp_button' onClick={() => navigate('/ex_03')}>
            Ερώτημα 3 - Η σελίδα μετα την εφαρμογή της CSS
          </button>
        </div>

        <footer className='hp_footer'>Πλαστήρας Δημήτριος - esd25029</footer>
      </div>
    </div>
  );
}
