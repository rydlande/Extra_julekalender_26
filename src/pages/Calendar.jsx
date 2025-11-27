import CalendarGrid from '../components/CalendarGrid';
import julekalenderSvg from '../assets/julekalender_logo_2025.png';
import nisseSvg from '../assets/nisse.svg';
import nisse2Svg from '../assets/nisse2.svg';
import bolge from '../assets/bolge.svg'
import { dailyContent } from '../data/displayContent';
import { useParams } from 'react-router-dom';


function Calendar() {
  const { dayId } = useParams();
  const content = dailyContent[dayId]

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('./assets/snø.svg')] bg-contain bg-no-repeat md:bg-auto md:bg-repeat-x"></div>
      <div className="absolute inset-0 w-screen h-screen overflow-hidden">
        <img src={bolge} alt="" className="w-full object-cover absolute top-[20%] md:top-[25%] translate-y-[-30%]" />
      </div>

      <img 
        src={nisseSvg} 
        alt="Flying nisse" 
        className="absolute w-24 md:w-32 animate-fly"
      />
      
      <img 
        src={nisse2Svg} 
        alt="Reverse flying nisse" 
        className="absolute w-24 md:w-32 animate-fly-reverse opacity-0"
        style={{ animationDelay: '10s' }}
      />
      
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
