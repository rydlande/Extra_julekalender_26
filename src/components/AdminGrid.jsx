import { useState } from 'react';
import { dailyContent } from '../data/displayContent';
import Modal from '../components/Modal';
import { isDoorOpen } from '../utils/dataHelpers';

function AdminGrid() {
  const [selectedDay, setSelectedDay] = useState(null);
  const days = [3, 16, 10, 20, 24, 9, 15, 1, 23, 8, 4, 18, 22, 19, 11, 7, 17, 12, 5, 21, 14, 2, 13, 6];

  const closeModal = () => {
    setSelectedDay(null);
  };

  return (
    <div className="grid grid-cols-6 gap-3 p-12">
      {days.map((day) => (
        <div
          key={day}
          onClick={() => setSelectedDay(day)}
          className={`cursor-pointer p-5 h-24 w-24 flex items-center justify-center text-center text-4xl font-bold rounded-sm ${
            isDoorOpen(day) ? 'bg-red-dark text-[#ae1322]' : 'bg-red text-white'
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