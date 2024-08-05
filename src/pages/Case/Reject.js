import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./reject.css";

function Reject() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const navigate = useNavigate();

  // Sample data array
  const tableData = [
    {
      caseNo: 1,
      branch: "uttamnagr",
      name: "kunal",
      address: "pune",
      mobile: "8888474692",
      status: "reject",
    },
    {
      caseNo: 2,
      branch: "shivajinagar",
      name: "raj",
      address: "mumbai",
      mobile: "9999999999",
      status: "reject",
    },
    {
      caseNo: 3,
      branch: "viman nagar",
      name: "sita",
      address: "pune",
      mobile: "7777777777",
      status: "reject",
    },
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
      if (!event.target.closest(".reject-dropdown-container")) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="reject-container">
      <div className="reject-card">
        <p style={{ marginTop: "10px", color: "orange", padding: "10px" }}>
          <b style={{ padding: "10px" }}>नापसंत केस यादी</b>
          <br />
          <br />
          <hr />
        </p>
        <table className="reject-case-table">
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
            {tableData.map((data, index) => (
              <tr key={data.caseNo}>
                <td>{data.caseNo}</td>
                <td>{data.branch}</td>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.mobile}</td>
                <td>{data.status}</td>
                <td>
                  <div className="reject-dropdown-container">
                    <button
                      className="reject-btn"
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
                      <span className="reject-label">Process</span>
                    </button>
                    <ul
                      className={`reject-dropdown ${
                        openDropdownIndex === index ? "show" : ""
                      }`}
                    >
                      <li onClick={() => handleNavigate("/addcase")}>See</li>
                      <li onClick={() => handleNavigate("/dashboard")}>
                        Improve
                      </li>
                      <li onClick={() => handleNavigate("/rejectreason")}>
                        Case Reject Reason
                      </li>
                      <li onClick={() => handleNavigate("/dashboard")}>
                        Transfer to AR
                      </li>
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

export default Reject;
