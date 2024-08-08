import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../images/ProfileIcon.png";
import hamburgerIcon from "../Head/images/hamburger-icon.png";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = useCallback((event) => {
    if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-menu-button')) {
      setMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-orange-600 h-20 px-6 flex items-center justify-between relative">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-32 lg:ml-16 lg:text-white lg:text-lg flex-1">
          <ul className="flex items-center space-x-8 cursor-pointer">
            <li>
              <span onClick={() => handleNavigate("/dashboard")}>
                <b>Dashboard</b>
              </span>
            </li>
            <li className="relative group">
              <span className="cursor-pointer">
                Case &#9662;
              </span>
              <ul className="absolute top-full mt-2 bg-black text-white border border-gray-400 rounded shadow-lg w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/newcase")}>
                  नवीन केस भरा
                </li>
                <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/TranferAR")}>
                  A R ला हस्तांतरित केस
                </li>
                <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/inprocess")}>
                  In Progress केस
                </li>
                <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/closed")}>
                  Closed केस
                </li>
                <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/reject")}>
                  Reject केस
                </li>
              </ul>
            </li>
            <li className="relative group">
              <span className="cursor-pointer">
                Report view &#9662;
              </span>
              <ul className="absolute top-full mt-2 bg-black text-white border border-gray-400 rounded shadow-lg w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/makereport")}>
                  रिपोर्ट तयार करा
                </li>
                <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/makeexcel")}>
                  एक्सेल रिपोर्ट प्रिंट करा
                </li>
                <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/inforeport")}>
                  कर्जदार माहिती
                </li>
              </ul>
            </li>
            <li>
              <span onClick={() => handleNavigate("/old-karwai")}>
                Old Karwai
              </span>
            </li>
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <img src={profile} alt="profile-image" className="h-8 lg:h-10" />
          <label className="underline text-white text-sm lg:text-base whitespace-nowrap">kunal Malusare</label>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex items-center justify-end text-white ml-auto hamburger-menu-button" 
          onClick={toggleMobileMenu}
        >
          <img src={hamburgerIcon} alt="menu" className="h-8" />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 right-0 w-full bg-white bg-opacity-10 backdrop-blur- text-white mobile-menu p-6">
            <ul className="space-y-2">
              <li>
                <span onClick={() => handleNavigate("/dashboard")}>
                  <b>Dashboard</b>
                </span>
              </li>
              <li className="relative group">
                <span className="cursor-pointer">
                  Case &#9662;
                </span>
                <ul className="bg-black bg-opacity-70 border border-gray-400 rounded shadow-lg w-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2 p-2">
                  <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/newcase")}>
                    नवीन केस भरा
                  </li>
                  <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/TranferAR")}>
                    A R ला हस्तांतरित केस
                  </li>
                  <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/inprocess")}>
                    In Progress केस
                  </li>
                  <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/closed")}>
                    Closed केस
                  </li>
                  <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/reject")}>
                    Reject केस
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <span className="cursor-pointer">
                  Report view &#9662;
                </span>
                <ul className="bg-black bg-opacity-70 border border-gray-400 rounded shadow-lg w-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2 p-2">
                  <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/makereport")}>
                    रिपोर्ट तयार करा
                  </li>
                  <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/makeexcel")}>
                    एक्सेल रिपोर्ट प्रिंट करा
                  </li>
                  <li className="p-2 hover:bg-gray-600" onClick={() => handleNavigate("/inforeport")}>
                    कर्जदार माहिती
                  </li>
                </ul>
              </li>
              <li>
                <span onClick={() => handleNavigate("/old-karwai")}>
                  Old Karwai
                </span>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
