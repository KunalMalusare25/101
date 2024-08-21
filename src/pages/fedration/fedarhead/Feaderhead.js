import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../images/ProfileIcon.png";
import hamburgerIcon from "../Head/images/hamburger-icon.png";

function Feaderhead() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
  return <div>Feaderhead</div>;
}

export default Feaderhead;
