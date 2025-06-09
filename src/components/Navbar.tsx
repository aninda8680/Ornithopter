import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md text-white py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">Ornithopter</div>
      <ul className="flex gap-6 font-semibold text-sm">
        <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#features" className="hover:text-yellow-400">Features</a></li>
        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
