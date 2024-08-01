import React from "react";
import "./rejectreason.css";

function RejectReason() {
  return (
    <div className="reject-reason">
      <div className="reason-card">
        <h3>Reject Reason</h3>
        <div className="remark">
          <h4 style={{ margin: "20px 0px 0px 20px" }}>Remark</h4>
          <div>
            <input type="text" className="iptext" />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgb(230,230,230)",
            marginTop: "10px",
            height: "60px",
          }}
        >
          <button type="submit">जतन करा</button>
        </div>
      </div>
    </div>
  );
}

export default RejectReason;
