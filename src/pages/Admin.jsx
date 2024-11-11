import { Link } from 'react-router-dom';
import { isDoorOpen } from '../utils/dataHelpers';

function Admin() {
  const days = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-red flex flex-col items-center">
      <header className="py-8">
        <h1 className="text-white text-3xl">Julekalender</h1>
      </header>
      
      <div className="grid grid-cols-6 gap-4 p-4">
        {days.map((day) => (
          <Link
            key={day}
            to={`/dag/${day}`}
            className={`p-6 text-center text-white font-bold rounded-lg ${
              isDoorOpen(day) ? 'bg-red' : 'bg-gray pointer-events-none'
            }`}
          >
            {day}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Admin;