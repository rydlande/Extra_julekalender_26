import CalendarGrid from '../components/CalendarGrid';
import julekalenderSvg from '../assets/julekalender.svg';
import { dailyContent } from '../data/displayContent';
import { useParams } from 'react-router-dom';


function Calendar() {
  const { dayId } = useParams();
  const content = dailyContent[dayId]

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-[url('./assets/snø.svg')] bg-contain bg-no-repeat md:bg-auto md:bg-repeat-x md:"></div>
      <div className="absolute inset-0 bg-[url('./assets/bolge.svg')] bg-contain bg-no-repeat bg-center"></div>
      
      <header className="relative z-10">
          <img src={julekalenderSvg} alt="Julekalender-logo" className="mx-auto max-w-sm w-48 pt-6 md:max-w-md md:w-64 md:pt-12 lg:max-w-full lg:w-80" />
      </header>
      
      <div className="relative z-10 mx-auto max-w-sm w-72 pt-6 md:max-w-md md:w-[670px] md:pt-12 lg:max-w-full lg:w-[760px]">
        <CalendarGrid />
      </div>
    </div>
  );
}

export default Calendar;
