import React from "react";
import "./makeexcel.css";
function Makeexcel() {
  return (
    <div className="rep_make-excel">
      <div className="rep_excel-card">
        <h2>एक्सेल रिपोर्ट प्रिंट करा</h2>
        <hr />
        <br />
        <div className="rep_excel">
          <div className="rep_startdate">
            <h4>तारखेपासून</h4>
            <input type="date" className="rep_excel-iptext" />
          </div>
          <div className="rep_enddate">
            <h4>तारखेपर्यंत</h4>
            <input type="date" className="rep_excel-iptext" />
          </div>
        </div>
        <div
          style={{
            marginTop: "10px",
            height: "60px",
          }}
        >
          <div className="rep_btns">
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
    </div>
  );
}

export default Makeexcel;
