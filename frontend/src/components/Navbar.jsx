import { Link } from 'react-router-dom'; // If using React Router

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white py-4 shadow">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">StallBook</h2>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/admin" className="hover:underline">
            Admin Panel
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;