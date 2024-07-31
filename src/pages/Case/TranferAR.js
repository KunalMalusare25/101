import React from "react";
import "./Transferar.css";

function TransferAR() {
  // Sample data for the table
  const cases = [
    {
      caseNo: "101",
      branch: "Main",
      name: "John Doe",
      address: "123 Main St, City, State",
      mobileNo: "123-456-7890",
      arName: "Jane Smith",
      condition: "Pending",
    },
    {
      caseNo: "102",
      branch: "Sub",
      name: "Alice Brown",
      address: "456 Elm St, City, State",
      mobileNo: "987-654-3210",
      arName: "Bob Johnson",
      condition: "Approved",
    },
    // Add more cases as needed
  ];

  return (
    <div className="artable-card">
      <div className="ar-card">
        <p style={{ marginTop: "10px", color: "orange", padding: "10px" }}>
          <b style={{ padding: "10px" }}>A R ला हस्तांतरित केस यादी</b>
          <br />
          <br />
          <hr />
        </p>
        <div className="AR-table-search">
          <div className="AR-tbl-search-1">
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
          <div className="AR-tbl-search-2">
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
        <table className="AR-case-table">
          <thead>
            <tr>
              <th>Case No</th>
              <th>Branch</th>
              <th>Name</th>
              <th>Address</th>
              <th>Mobile No</th>
              <th>AR Name</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((caseItem, index) => (
              <tr key={index}>
                <td>{caseItem.caseNo}</td>
                <td>{caseItem.branch}</td>
                <td>{caseItem.name}</td>
                <td>{caseItem.address}</td>
                <td>{caseItem.mobileNo}</td>
                <td>{caseItem.arName}</td>
                <td>{caseItem.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransferAR;
