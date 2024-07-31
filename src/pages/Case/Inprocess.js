import React, { useEffect, useRef, useState } from "react";
import "./inprocess.css";

function Inprocess() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropdownRef = useRef(null);

  const handleDropdownClick = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  const handleOptionClick = (option) => {
    alert(`Option selected: ${option}`);
    setOpenDropdownIndex(null); // Close the dropdown after selection
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdownIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const options = [
    "See",
    "Create a Report",
    "Upload the Document",
    "Daily Name",
  ];

  // Define table data as an array of objects
  const tableData = [
    {
      caseNumber: "472",
      branch: "मुख्य",
      name: "जाधव संजय विठ्ठल",
      address: "शंकर नगर तहसील ऑफिस जानवी किराणा दुकान जुना जालना",
      mobile: "7774037519",
      status: "Open",
    },
    {
      caseNumber: "473",
      branch: "उपमुख्य",
      name: "पाटील महेश राजेंद्र",
      address: "नगर पालिका, तिलक रोड, मुंबई",
      mobile: "8888899999",
      status: "In Progress",
    },
    // Add more case objects as needed
  ];

  return (
    <div className="inprocess-table">
      <div className="inprocess-card">
        <p style={{ marginTop: "10px", color: "orange", padding: "10px" }}>
          <b style={{ padding: "10px" }}>प्रगतीपथावर केस यादी</b>
          <br />
          <br />
          <hr />
        </p>
        <div className="inprocess-btn">
          <button
            style={{
              margin: "10px 0 0 15px",
              padding: "8px",
              color: "white",
              backgroundColor: "green",
              border: "none",
              borderRadius: "5px",
            }}
          >
            नवीन केस भरा / ADD New Case +
          </button>
        </div>
        <table className="case-table">
          <thead>
            <tr>
              <th>केस नं.</th>
              <th>शाखा</th>
              <th>नाव</th>
              <th>पत्ता (जिल्हा, तालुका, गाव)</th>
              <th>मोबाईल नं</th>
              <th>स्थिती</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.caseNumber}</td>
                <td>{row.branch}</td>
                <td>{row.name}</td>
                <td>{row.address}</td>
                <td>{row.mobile}</td>
                <td>{row.status}</td>
                <td ref={dropdownRef}>
                  <button
                    onClick={() => handleDropdownClick(index)}
                    style={{
                      padding: "8px",
                      color: "white",
                      backgroundColor: "rgb(255, 115, 0)", // Orange color
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Process
                  </button>
                  {openDropdownIndex === index && (
                    <div className="dropdown">
                      {options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          onClick={() => handleOptionClick(option)}
                          className="dropdown-item"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inprocess;
