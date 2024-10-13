import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Calculator Hub</h2>
          <p className="text-sm">Helping you with daily calculations!</p>
        </div>

        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#calculators" className="hover:underline">
            Calculators
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
