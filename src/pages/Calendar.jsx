import CalendarGrid from '../components/CalendarGrid';

function Calendar() {
  return (
    <div className='bg-[url("./assets/snø.svg")] min-h-screen bg-repeat-x'>
      <header className="py-12 flex items-center justify-center">
        <h1 className='text-white text-3xl'>Julekalender</h1>
      </header>
      <div className='flex flex-col items-center justify-center'>
        <CalendarGrid />
      </div>
    </div>
  );
}

export default Calendar;