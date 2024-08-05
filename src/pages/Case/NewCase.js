import React, { useState, useEffect } from "react";
import "./newcase.css";
import { useNavigate } from "react-router-dom";

function NewCase() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const navigate = useNavigate();

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

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDropdownIndex(null); // Close dropdown after navigation
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".new-dropdown-container")) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            onClick={() => handleNavigate("/addcase")}
            style={{
              margin: "10px 0 0 15px",
              padding: "8px",
              color: "white",
              backgroundColor: "green",
              cursor: "pointer",
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
              <th>प्रक्रिया</th>
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
                <td>
                  <div className="new-dropdown-container">
                    <button
                      className="new-case-btn"
                      style={{
                        width: "120px",
                        padding: "8px",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "rgb(255, 115, 0)",
                      }}
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="new-case-label">प्रक्रिया</span>
                    </button>
                    <ul
                      className={`new-case-dropdown ${
                        openDropdownIndex === index ? "show" : ""
                      }`}
                      onClick={(e) => e.stopPropagation()} // Prevent event bubbling
                    >
                      <li onClick={() => handleNavigate("/addcase")}>
                        सुधारणे
                      </li>
                      <li onClick={() => handleNavigate("/addcase")}>पहा</li>
                      <li onClick={() => handleNavigate("/makereport")}>
                        रिपोर्ट तयार करा
                      </li>
                      <li onClick={() => handleNavigate("/tranferar")}>
                        AR ला हस्तांतरित करा
                      </li>
                      <li onClick={() => handleNavigate("/uploadDoc")}>
                        दस्तऐवज अपलोड करा
                      </li>
                      <li onClick={() => handleNavigate("/dashboard")}>हटवा</li>
                    </ul>
                  </div>
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
