import CalendarGrid from '../components/CalendarGrid';
import julekalenderSvg from '../assets/julekalender.svg';
import extra from '../assets/extra_logo.svg';

function Calendar() {
  return (
    <div className='bg-[url("./assets/snø.svg")] min-h-screen bg-repeat-x'>
      <header className="py-12 flex items-center justify-center">
        <a href="/admin">
          <img src={julekalenderSvg} alt="Tekst: julekalender" className='max-w-80 h-auto mx-auto'/>
        </a>
      </header>
      <div className='flex flex-col items-center justify-center'>
        <CalendarGrid />
      </div>
      <footer className='flex items-center justify-center'>
        <img src={extra} alt="" className='max-w-64 h-auto mx-auto'/>
      </footer>
    </div>
  );
}

export default Calendar;