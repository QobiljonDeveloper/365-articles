import { memo, useState } from "react";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import HeaderButtons from "./components/HeaderButtons";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-5 px-4 sm:px-6 lg:px-10 bg-primaryBg relative z-50">
      <div className="flex items-center justify-between">
        <Logo />

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center gap-10">
          <Navbar />
          <HeaderButtons />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Sidebar Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl focus:outline-none"
          >
            <FiX />
          </button>
        </div>
        <div className="flex flex-col gap-6 p-5">
          <Navbar vertical />
          <HeaderButtons />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default memo(Header);
