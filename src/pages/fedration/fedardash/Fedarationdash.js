import React, { useState, useEffect } from "react";
import "./fedardash.css";
import { useNavigate } from "react-router-dom";

function Fedarationdash() {
  const navigate = useNavigate();

  const handlecaseNavigate = (path) => {
    navigate(path);
  };
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const handleButtonClick = (button) => {
    setActiveButton((prevButton) => (prevButton === button ? "" : button));
  };
  return (
    <>
      <div className="fedar-Das-dash-statistics">
        <h2>Dashboard</h2>
        <p>Statistics & Reports</p>
      </div>
      <div className="fedar-Das-DashContain">
        <div className="fedar-Das-card-left">
          <h2 className="fedar-Das-card-title">
            <u>CASE SUMMARY</u>
          </h2>
          <div className="fedar-Das-date-time">
            <h5>{formatDate(currentTime)}</h5>
          </div>
          <hr />
          <div className="fedar-Das-cases-list">
            <div>
              <label>एकूण केस submitted to AR</label>
              <h1 onClick={() => handlecaseNavigate("/newcase")}>2719</h1>
            </div>
            <div>
              <label>एकूण केस accepted by AR</label>
              <h1 onClick={() => handlecaseNavigate("/inprocess")}>2084</h1>
            </div>
            <div>
              <label>बंद केस for this AR</label>
              <h1 onClick={() => handlecaseNavigate("/closed")}>12</h1>
            </div>
          </div>
        </div>

        {/* <div className="fedar-Das-card-right ">
          <h2 className="fedar-Das-card-title">
            <u>STAMP CALCULATION</u>
          </h2>
          <button
            className="fedar-Das-button"
            onClick={() => handleButtonClick("केस नं. १ (पहा)")}
          >
            केस नं. १ (पहा)
          </button>

          {activeButton === "केस नं. १ (पहा)" && (
            <div className="fedar-Das-clicked-text">
              <p></p>
            </div>
          )}
          <button
            className="fedar-Das-button"
            onClick={() => handleButtonClick("केस नं. २ (पहा)")}
          >
            केस नं. २ (पहा)
          </button>
          {activeButton === "केस नं. २ (पहा)" && (
            <div className="fedar-Das-clicked-text">
              <p></p>
            </div>
          )}
        </div> */}
      </div>
    </>
  );
}

export default Fedarationdash;
