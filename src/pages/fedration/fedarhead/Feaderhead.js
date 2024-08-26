import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../../images/ProfileIcon.png";
import hamburgerIcon from "../../../components/Head/images/hamburger-icon.png";
import { useAuth } from "../../../context/AuthContext";

function Feaderhead() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user } = useAuth();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "auto";
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (
        (!event.target.closest(".dropdown") && activeDropdown !== null) ||
        (isMobileMenuOpen &&
          !event.target.closest(".mobile-menu") &&
          !event.target.closest(".hamburger-menu-button"))
      ) {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    },
    [activeDropdown, isMobileMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = "auto";
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  return (
    <>
      <header className="h-20 px-6 flex items-center justify-between relative bg-purple-950">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-32 lg:ml-16 lg:text-white lg:text-lg flex-1">
          <ul className="flex items-center space-x-8 cursor-pointer">
            <li className="underline">
              <span onClick={() => handleNavigate("/fedardash")}>
                <b>Dashboard</b>
              </span>
            </li>
            <li className="relative group underline">
              <span
                className="cursor-pointer"
                onClick={() => handleNavigate("/fedarnewcase")}
              >
                New केस
              </span>
            </li>
            <li className="relative group underline">
              <span
                className="cursor-pointer"
                onClick={() => handleNavigate("/fedarinprocess")}
              >
                Inprocess केस
              </span>
            </li>
            <li className="relative group underline">
              <span
                className="cursor-pointer"
                onClick={() => handleNavigate("/fedarclosedcase")}
              >
                Closed केस
              </span>
            </li>
            <li className="underline">
              <span onClick={() => handleNavigate("/old-karwai")}>
                Old Karwai
              </span>
            </li>
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <img src={profile} alt="profile-image" className="h-8 lg:h-10" />
          <label
            className="underline text-white text-sm lg:text-base whitespace-nowrap cursor-pointer"
            onClick={() => toggleDropdown(1)}
          >
            {user?.descn || "Guest"}
          </label>
          {activeDropdown === 1 && (
            <ul className="absolute top-full bg-red-600 text-white border border-gray-400  shadow-lg w-32 dropdown rounded-md">
              <li
                className="p-2 hover:bg-gray-600 cursor-pointer text-center"
                onClick={() => handleNavigate("/")}
              >
                LOGOUT
              </li>
            </ul>
          )}
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
          <div className="lg:hidden fixed inset-0 bg-orange-300 bg-opacity-70 text-white mobile-menu p-6 overflow-y-auto">
            <ul className="space-y-2">
              <li className="underline">
                <span onClick={() => handleNavigate("/dashboard")}>
                  <b>Dashboard</b>
                </span>
              </li>
              <li className="relative group underline">
                <span
                  className="cursor-pointer"
                  onClick={() => handleNavigate("/newcase")}
                >
                  New केस
                </span>
              </li>
              <li className="relative group underline">
                <span
                  className="cursor-pointer"
                  onClick={() => handleNavigate("/makereport")}
                >
                  Inprocess केस
                </span>
              </li>
              <li className="relative group underline">
                <span
                  className="cursor-pointer"
                  onClick={() => handleNavigate("/makereport")}
                >
                  Closed केस
                </span>
              </li>
              <li className="underline">
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
}

export default Feaderhead;
