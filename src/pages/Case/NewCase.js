import React, { useState, useEffect, useRef } from "react";
import "./newcase.css";

function NewCase() {
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
    "Improve",
    "See",
    "Create a Report",
    "Transfer to AR",
    "Upload the Document",
    "Delete",
  ];

  // Define table data in an array
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
    // You can add more rows as needed
  ];

  return (
    <div className="table-container">
      <div className="table-card">
        <p style={{ marginTop: "10px", color: "orange", padding: "10px" }}>
          <b style={{ padding: "10px" }}>नवीन केस यादी</b>
          <br />
          <br />
          <hr />
        </p>
        <div className="btn">
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
          <button
            style={{
              margin: "10px 15px 0 0 ",
              padding: "8px",
              color: "white",
              backgroundColor: "green",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Print
          </button>
        </div>

        <div className="table-search">
          <div className="tbl-search-1">
            <p>Show</p>
            <input
              type="search"
              style={{
                padding: "5px",
                width: "80px",
                borderRadius: "5px",
                margin: "0 5px 0 5px",
              }}
            />
            <p>Entries</p>
          </div>
          <div className="tbl-search-2">
            <p>Search:</p>
            <input
              type="search"
              style={{
                padding: "5px",
                width: "150px",
                borderRadius: "5px",
                margin: "0 0 0 5px",
              }}
            />
          </div>
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
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "rgb(255, 115, 0)",
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

export default NewCase;
