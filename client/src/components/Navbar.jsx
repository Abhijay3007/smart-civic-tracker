import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  console.log("NAVBAR USER:", user);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600"
        >
          Smart Civic Tracker
        </Link>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Logged-in User Greeting */}
          {user && (
            <span className="text-sm text-gray-600 hidden sm:block">
              Hi, {user.name}
            </span>
          )}

          {/* User-only: Report Issue */}
          {user?.role === "user" && (
            <Link
              to="/create"
              className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition"
            >
              Report Issue
            </Link>
          )}

          {/* Admin-only: Admin Dashboard */}
          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              Admin Panel
            </Link>
          )}

          {/* Auth Buttons */}
          {user ? (
            <button
              onClick={handleLogout}
              className="text-sm bg-red-500 text-white px-3 py-1.5 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-blue-600 hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm text-blue-600 hover:underline"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
