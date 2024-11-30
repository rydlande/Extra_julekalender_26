import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='flex flex-col min-h-screen h-full bg-gradient-to-b from-red-dark to-red font-ExtraRound-Medium'>
        <Outlet />
    </div>
  );
}

export default App;