import React from 'react';

const Navbar = () => {
  return (
    <div className="flex bg-black text-white flex-wrap justify-between p-4 sm:p-6 lg:p-10">
      <img
        className="h-14 w-22"
        src="https://imgs.search.brave.com/hNjKwE4cvLAG_RCA3j-4iOW4pREKfz499qO_E3nzxP4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZG11YmZyZWZp/L2ltYWdlL3ByaXZh/dGUvcy0teTBBeF9G/TzYtLS9jX2Nyb3As/aF8yODEzLHdfNTAw/MCx4XzAseV8wL2Nf/c2NhbGUsd18zODQw/L2ZfYXV0by9xX2F1/dG8vdjEvZGVlLWFi/b3V0LWNtcy1wcm9k/LW1lZGlhcy9jZjY4/ZjU0MS1mYzkyLTQz/NzMtOTFjYi0wODZh/ZTBmZTJmODgvMDAy/LW5pa2UtbG9nb3Mt/c3dvb3NoLXdoaXRl/LmpwZz9fYT1CQUFB/VjZCcw"
        alt="Logo"
      />

      {/* Hamburger Icon for Mobile */}
      <button className="lg:hidden text-xl group">
        ☰
      </button>

      {/* Navbar Menu */}
      <ul className="lg:flex items-center space-x-10 hidden lg:block group-hover:block">
        <li className="py-2 lg:py-0">MENU</li>
        <li className="py-2 lg:py-0">LOCATION</li>
        <li className="py-2 lg:py-0">ABOUT</li>
        <li className="py-2 lg:py-0">CONTACT</li>
      </ul>

      {/* Mobile Menu */}
      <ul className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg hidden group-hover:block">
        <li className="py-2 text-center">MENU</li>
        <li className="py-2 text-center">LOCATION</li>
        <li className="py-2 text-center">ABOUT</li>
        <li className="py-2 text-center">CONTACT</li>
      </ul>

      {/* Login Button */}
      <button className="bg-red-500 h-10 w-16 p-2 rounded-md">Login</button>
    </div>
  );
};

export default Navbar;
