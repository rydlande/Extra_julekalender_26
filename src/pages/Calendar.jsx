import CalendarGrid from '../components/CalendarGrid';
import julekalenderSvg from '../assets/julekalender.svg';
import extra from '../assets/extra_logo.svg';

function Calendar() {
  return (
    <div className='bg-[url("./assets/snø.svg")] min-h-screen bg-repeat-x'>
      <header className="pt-12 pb-2 flex items-center justify-center">
        <a href="/admin">
          <img src={julekalenderSvg} alt="Tekst: julekalender" className='max-w-80 h-auto mx-auto'/>
        </a>
      </header>
      <div className='flex flex-col items-center justify-center'>
        <CalendarGrid />
      </div>
      <footer className='pt-12 flex items-center justify-center'>
        <img src={extra} alt="Extra logo" className='max-w-60 h-auto mx-auto'/>
      </footer>
    </div>
  );
}

export default Calendar;