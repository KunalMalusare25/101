import React from "react";
import "./rejectreason.css";

function RejectReason() {
  return (
    <div className="reject-reason-main">
      <div className="reject-reason-card">
        <h3>Reject Reason</h3>
        <div className="reason-remark">
          <h4 style={{ margin: "20px 0px 0px 20px" }}>Remark</h4>
          <div>
            <input type="text" className="reject-iptext" />
          </div>
        </div>
        <div
          className="reject-reason-button"
          style={{
            marginTop: "10px",
            height: "60px",
          }}
        >
          <button
            type="submit"
            style={{ width: "100px", height: "40px", marginTop: "20px" }}
          >
            जतन करा
          </button>
        </div>
      </div>
    </div>
  );
}

export default RejectReason;
