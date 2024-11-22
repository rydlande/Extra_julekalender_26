import AdminGrid from '../components/AdminGrid';
import julekalenderSvg from '../assets/julekalender.svg';
import extra from '../assets/extra_logo.svg';
function Admin() {
  return (
    <div className='bg-[url("./assets/snø.svg")] min-h-screen bg-repeat-x'>
      <header className="py-12 flex items-center justify-center">
        <a href="/" className='flex items-center justify-center'>
          <img src={julekalenderSvg} alt="Tekst: julekalender" className='max-w-80 h-auto mx-auto'/>
        </a>
      </header>
      <div className='flex flex-col items-center justify-center'>
        <AdminGrid />
      </div>
      <footer className='flex items-center justify-center'>
        <h1 className='text-white text-3xl'>Admin</h1>
      </footer>
    </div>
  );
}

export default Admin;