import AdminGrid from '../components/AdminGrid';

function Admin() {
  return (
    <div className='bg-[url("./assets/snø.svg")] min-h-screen bg-repeat-x'>
      <header className="py-12 flex items-center justify-center">
        <h1 className='text-white text-3xl'>Julekalender - Admin</h1>
      </header>
      <div className='flex flex-col items-center justify-center'>
        <AdminGrid />
      </div>
    </div>
  );
}

export default Admin;