import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Logo + Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/ticketicon.png"
            alt="GoTickets Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold "><span className="text-blue-600">Go</span> Tickets</h1>
        </Link>

        {/* Middle: Menu */}
        <div className="hidden md:flex">
          <NavLink
            to="/"
            className="text-gray-700 text-lg font-medium hover:text-blue-600"
          >
            Home
          </NavLink>
        </div>

        {/* Right: Login + Signup */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
