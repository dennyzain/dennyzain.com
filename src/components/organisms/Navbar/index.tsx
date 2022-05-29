import React from 'react';
import { Sun } from 'react-feather';

const Navbar = () => (
  <header>
    <nav className="flex justify-between items-center fixed top-0 left-0 font-inter w-full font-bold p-3">
      <div className="grid grid-cols-4 gap-x-2 text-center text-sm">
        <p>Home</p>
        <p>Blogs</p>
        <p>Projects</p>
        <p>About</p>
      </div>
      <button type="button" className="p-1 border-2 border-black rounded-lg mr-2">
        <Sun color="black" size={15} />
      </button>
    </nav>
  </header>
);

export default Navbar;
