import { useState } from 'react';
import { isDoorOpenAdmin } from '../utils/dataHelpers';
import { dailyContent } from '../data/displayContent';
import Modal from '../components/Modal';

function AdminGrid() {
  const [selectedDay, setSelectedDay] = useState(null);
  const days = [3, 16, 10, 20, 24, 9, 15, 1, 23, 8, 4, 18, 22, 19, 11, 7, 17, 12, 5, 21, 14, 2, 13, 6];

  const closeModal = () => {
    setSelectedDay(null);
  };

  return (
    <div className="grid grid-cols-6 gap-8 p-12">
      {days.map((day) => (
        <div
          key={day}
          onClick={() => setSelectedDay(day)}
          className={`cursor-pointer h-24 w-24 flex items-center justify-center text-center rounded-sm font-ExtraRound-Medium text-[70px] ${
            isDoorOpenAdmin(day) 
              ? 'bg-red-dark text-[#ae1322] ring-8 ring-offset-1 ring-offset-red-dark ring-red-dark'
              : 'bg-red text-white pointer-events-none ring-[6px] ring-offset-[0.5px] ring-offset-red-dark ring-red box-border'
          }`}
        >
          {day}
        </div>
      ))}

      {selectedDay && (
        <Modal content={dailyContent[selectedDay]} onClose={closeModal} />
      )}
    </div>
  );
}

export default AdminGrid;