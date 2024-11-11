import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-red-dark to-red'>
        <Outlet />
    </div>
  );
}

export default App;