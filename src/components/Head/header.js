import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import profile from "../../images/ProfileIcon.png";

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isReportDropdownOpen, setReportDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const reportDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleReportDropdown = () => {
    setReportDropdownOpen(!isReportDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
    if (
      reportDropdownRef.current &&
      !reportDropdownRef.current.contains(event.target)
    ) {
      setReportDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setDropdownOpen(false);
    setReportDropdownOpen(false);
  };

  return (
    <>
      <div className="dash-header">
        <div className="headimg">
          <img src="\images\shoe_image.png" alt="company-logo" />
        </div>
        <div className="head-profile">
          <img
            src={profile}
            alt="profile-image"
            style={{ margin: "10px 0px 0px 800px" }}
          />
        </div>
        <div className="profile-name">
          <label>
            <u>kunal Malusare</u>
          </label>
        </div>
      </div>

      <div className="dash">
        <div className="dash-nav">
          <ul className="list">
            <li>
              <span onClick={() => handleNavigate("/dashboard")}>
                <b>Dashboard</b>
              </span>
            </li>
            <li ref={dropdownRef}>
              <span className="dropdown-label" onClick={toggleDropdown}>
                Case &#9662;
              </span>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <span onClick={() => handleNavigate("/newcase")}>
                      नवीन केस भरा
                    </span>
                  </li>
                  <li>
                    <span onClick={() => handleNavigate("/TranferAR")}>
                      A R ला हस्तांतरित केस
                    </span>
                  </li>
                  <li>
                    <span onClick={() => handleNavigate("/inprocess")}>
                      In Progress केस
                    </span>
                  </li>
                  <li>
                    <span onClick={() => handleNavigate("/closed")}>
                      Closed केस
                    </span>
                  </li>
                  <li>
                    <span onClick={() => handleNavigate("/reject")}>
                      Reject केस
                    </span>
                  </li>
                </ul>
              )}
            </li>
            <li ref={reportDropdownRef}>
              <span className="dropdown-label" onClick={toggleReportDropdown}>
                Report view &#9662;
              </span>
              {isReportDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <span onClick={() => handleNavigate("/makereport")}>
                      रिपोर्ट तयार करा
                    </span>
                  </li>
                  <li>
                    <span onClick={() => handleNavigate("/makeexcel")}>
                      एक्सेल रिपोर्ट प्रिंट करा
                    </span>
                  </li>
                  <li>
                    <span onClick={() => handleNavigate("/inforeport")}>
                      कर्जदार माहिती
                    </span>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <span onClick={() => handleNavigate("/old-karwai")}>
                Old Karwai
              </span>
            </li>
          </ul>
        </div>

        <div className="search-box">
          <input type="search" className="search" placeholder="Search" />
        </div>
      </div>
    </>
  );
};

export default Header;
