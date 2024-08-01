import React from "react";
import "./makeexcel.css";
function Makeexcel() {
  return (
    <div className="make-excel">
      <div className="excel-card">
        <h2>एक्सेल रिपोर्ट प्रिंट करा</h2>
        <hr />
        <br />
        <div className="excel">
          <div className="startdate">
            <h4>तारखेपासून</h4>
            <input type="date" className="excel-iptext" />
          </div>
          <div className="enddate">
            <h4>तारखेपर्यंत</h4>
            <input type="date" className="excel-iptext" />
          </div>
        </div>
        <div
          style={{
            marginTop: "10px",
            height: "60px",
          }}
        >
          <button type="submit" style={{ background: "rgb(35, 134, 202)" }}>
            तारखेपासून
          </button>
          <button type="submit" style={{ background: "rgb(35, 134, 202)" }}>
            पूर्ण रिपोर्ट
          </button>
          <button type="submit" style={{ background: "rgb(241, 53, 61)" }}>
            Download Excel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Makeexcel;
