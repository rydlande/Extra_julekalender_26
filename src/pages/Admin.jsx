import AdminGrid from '../components/AdminGrid';
import julekalenderSvg from '../assets/julekalender.svg';
//import extra from '../assets/extra_logo.svg';

function Admin() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-[url('./assets/snø.svg')] bg-contain bg-no-repeat md:bg-auto md:bg-repeat-x md:"></div>
      <div className="absolute inset-0 bg-[url('./assets/bolge.svg')] bg-contain bg-no-repeat bg-center"></div>
      
      <header className="relative z-10">
        <a href="/">
          <img src={julekalenderSvg} alt="Julekalender-logo" className="mx-auto max-w-sm w-48 pt-6 md:max-w-md md:w-64 md:pt-12 lg:max-w-full lg:w-80" />
        </a>
      </header>
      
      <div className="relative z-100 mx-auto max-w-sm w-72 pt-6 md:max-w-md md:w-[700px] md:pt-12 lg:max-w-full lg:w-[945px]">
        <AdminGrid />
      </div>
      <footer className='flex items-center justify-center'>
        <h1 className='text-white text-3xl'>Admin</h1>
      </footer>
    </div>
  );
}

export default Admin;