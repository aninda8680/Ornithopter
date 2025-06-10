import React from "react";

const Navbar: React.FC = () => {
  // Scroll to Features section
  const handleFeaturesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to Footer (About)
  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Refresh page for Home
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md text-white py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">Ornithopter</div>
      <ul className="flex gap-6 font-semibold text-sm">
        <li>
          <a href="/" onClick={handleHomeClick} className="hover:text-yellow-400">
            Home
          </a>
        </li>
        <li>
          <a href="#features" onClick={handleFeaturesClick} className="hover:text-yellow-400">
            Features
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleAboutClick} className="hover:text-yellow-400">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
