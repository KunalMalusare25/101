import React, { useEffect, useRef, useState } from "react";
import "./closed.css";
import { useNavigate } from "react-router-dom";

function Closed() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropdownRefs = useRef([]);
  const navigate = useNavigate();

  const handleDropdownClick = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDropdownIndex(null);
  };

  const handleClickOutside = (event) => {
    if (dropdownRefs.current.every((ref) => ref && !ref.contains(event.target))) {
      setOpenDropdownIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const options = ["See"];
  const tableData = [
    {
      caseNumber: "472",
      branch: "मुख्य",
      name: "जाधव संजय विठ्ठल",
      address: "शंकर नगर तहसील ऑफिस जानवी किराणा दुकान जुना जालना",
      mobile: "7774037519",
      ArName: "	TestAR  हवेली",
      status: "Closed",
    },
    {
      caseNumber: "473",
      branch: "उपमुख्य",
      name: "पाटील महेश राजेंद्र",
      address: "नगर पालिका, तिलक रोड, मुंबई",
      mobile: "8888899999",
      ArName: "	TestAR  हवेली",
      status: "Closed",
    },
    // Add more case objects as needed
  ];

  return (
    <div className="closed-container">
      <div className="closed-card">
        <p style={{ marginTop: "10px", color: "orange", padding: "10px" }}>
          <b style={{ padding: "10px" }}>बंद केस यादी</b>
          <br />
          <br />
          <hr />
        </p>
        <table className="closed-case-table">
          <thead>
            <tr>
              <th>केस नं.</th>
              <th>शाखा</th>
              <th>नाव</th>
              <th>पत्ता (जिल्हा, तालुका, गाव)</th>
              <th>मोबाईल नं</th>
              <th> AR नाव </th>
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
                <td>{row.ArName}</td>
                <td>{row.status}</td>
                <td>
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
                    <div className="closed-dropdown" ref={(el) => (dropdownRefs.current[index] = el)}>
                      {options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          onClick={() => handleNavigate("/addcase")}
                          className="closed-dropdown-item"
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

export default Closed;
