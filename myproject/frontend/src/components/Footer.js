import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900/80 py-12 text-slate-500 text-sm">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-900 pb-8 mb-8">
          <div className="flex items-center space-x-3">
            <img className="w-12 h-12 rounded-xl border border-slate-800" src="/newlogo.jpg" alt="RMVC Shop Logo" />
            <div>
              <span className="text-lg font-bold text-slate-300 block tracking-wider">RMVC COLLECTION</span>
              <span className="text-xs text-slate-500">Premium Jewellery, Chains & Timepieces</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-rose-400 transition-colors duration-200 text-lg" title="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-lg" title="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors duration-200 text-lg" title="YouTube">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>© 2026 RMVC Collection. All rights reserved. Designed for elite aesthetics.</p>
          <div className="flex gap-4">
            <Link to="/" className="text-slate-600 hover:text-amber-400 transition-colors no-underline">Home</Link>
            <Link to="/BuyPage" className="text-slate-600 hover:text-amber-400 transition-colors no-underline">Categories</Link>
            <Link to="/Logosec" className="text-slate-600 hover:text-amber-400 transition-colors no-underline">Showcase</Link>
          </div>
          <p className="text-slate-600">Thank you for choosing us. Your trust is our pride.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
