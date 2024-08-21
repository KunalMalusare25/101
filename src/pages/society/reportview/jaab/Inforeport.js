import React from "react";
import "./inforeport.css";

function Inforeport() {
  return (
    <>
      <div className="jaab-container">
        <div className="jaab-card">
          <img src="\img\jaabimg.png" alt="img" />
        </div>
      </div>
      <div className="jaab-btn">
        <button
          style={{
            width: "10%",
            height: "40px",
            fontSize: "15px",
          }}
        >
          नोटीस प्रिंट करा
        </button>
      </div>
    </>
  );
}

export default Inforeport;
