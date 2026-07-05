import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout, isLoggedIn } = useAuth();

  const HandleLoginClick = () => {
    navigate("/Home");
  };

  const HandleLogoutClick = () => {
    logout();
    navigate("/");
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/Logosec" },
    { label: "Categories", to: "/BuyPage" },
    { label: "Watches", to: "/Watch" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 px-4 py-3">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 no-underline">
          <img className="w-8 h-8 rounded-lg border border-amber-500/40" src="/newlogo.jpg" alt="RMVC" />
          <span className="text-lg font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-serif">
            RMVC
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900/60 rounded-lg transition-all duration-200 no-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Actions */}
        <div className="flex items-center space-x-3">
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <span className="hidden sm:inline text-xs font-semibold text-slate-400">
                Welcome, <span className="text-amber-400 font-bold">{user?.full_name || user?.username}</span>
              </span>
              <button
                onClick={HandleLogoutClick}
                className="px-4 py-2 text-xs font-bold text-slate-200 border border-slate-800 hover:border-red-500/40 hover:bg-red-500/10 rounded-full transition-all duration-200 flex items-center gap-1.5"
              >
                <i className="bi bi-box-arrow-right text-red-400"></i> Logout
              </button>
            </div>
          ) : (
            <button
              onClick={HandleLoginClick}
              className="px-5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 rounded-full transition-all duration-200 shadow-md shadow-amber-500/20 flex items-center gap-1.5"
            >
              <i className="bi bi-person-fill"></i> Sign In / Account
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
