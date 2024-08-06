import React, { useEffect, useState } from "react";
import "./inprocess.css";
import { useNavigate } from "react-router-dom";

function Inprocess() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const navigate = useNavigate();

  const tableData = [
    {
      caseNumber: "472",
      branch: "मुख्य",
      name: "जाधव संजय विठ्ठल",
      address: "शंकर नगर तहसील ऑफिस जानवी किराणा दुकान जुना जालना",
      mobile: "7774037519",
      status: "In Progress",
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

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDropdownIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".inprocess-dropdown-container")) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            onClick={() => handleNavigate("/addcase")}
            style={{
              margin: "10px 0 0 15px",
              padding: "8px",
              color: "white",
              backgroundColor: "green",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            नवीन केस भरा / ADD New Case +
          </button>
        </div>
        <table className="inprocess-case-table">
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
                  <div className="inprocess-dropdown-container">
                    <button
                      className="inprocess-case-btn"
                      style={{
                        padding: "8px",
                        color: "white",
                        backgroundColor: "rgb(255, 115, 0)",
                        border: "none",
                        borderRadius: "5px",
                      }}
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="inprocess-case-label">प्रक्रिया</span>
                    </button>
                    <ul
                      className={`inprocess-case-dropdown ${
                        openDropdownIndex === index ? "show" : ""
                      }`}
                    >
                      <li onClick={() => handleNavigate("/addcase")}>See</li>
                      <li onClick={() => handleNavigate("/makereport")}>
                        Create a Report
                      </li>
                      <li onClick={() => handleNavigate("/uploadDoc")}>
                        Upload the Document
                      </li>
                      <li onClick={() => handleNavigate("/roz")}>Daily Name</li>
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

export default Inprocess;
