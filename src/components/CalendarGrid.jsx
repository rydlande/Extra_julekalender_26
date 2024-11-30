import { useState, useEffect } from 'react';
import { dailyContent } from '../data/displayContent';
import Modal from './Modal';


function CalendarGrid() {
  const [selectedDay, setSelectedDay] = useState(null);
  const days = [3, 16, 10, 20, 24, 9, 15, 1, 23, 8, 4, 18, 22, 19, 11, 7, 17, 12, 5, 21, 14, 2, 13, 6];

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();

  function isDoorOpen(day) {
    return currentMonth === 11 && day <= today.getDate();
  }

  const closeModal = () => {
    setSelectedDay(null);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="grid grid-cols-4 md:grid-cols-6 gap-5 md:gap-5 md:gap-x-11 lg:gap-8">
      {days.map((day) => (
        <div
          key={day}
          onClick={() => isDoorOpen(day) && setSelectedDay(day)}
          className={`cursor-pointer flex items-center justify-center text-center font-ExtraRound-Medium shadow-md md:shadow-xl w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-[1px] lg:rounded-sm text-[37px] md:text-[45px] lg:text-[70px] ${
            day === currentDay && currentMonth === 11
              ? 'bg-red text-yellow ring-[3px] ring-offset-2 lg:ring-offset-4 ring-offset-red ring-yellow'
              : isDoorOpen(day)
              ? 'bg-red-dark text-[#ae1322] ring-4 lg:ring-8 ring-offset-1 ring-offset-red-dark ring-red-dark'
              : 'bg-red text-white pointer-events-none ring-[4px] lg:ring-[6px] ring-offset-[0.5px] ring-offset-red-dark ring-red box-border'
          }`}
        >
            <span className="-mb-1.5 md:-mb-2 lg:-mb-2.5">{day}</span>
        </div>
      ))}

      {selectedDay && (
        <Modal content={dailyContent[selectedDay]} onClose={closeModal} luke={selectedDay} />
      )}
    </div>
  );
}

export default CalendarGrid;