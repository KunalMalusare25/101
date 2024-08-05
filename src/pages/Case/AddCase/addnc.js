import React, { useState } from "react";
import "./addnc.css";
import JaminInfo from "./jamin";

const Addnc = () => {
  const [activeTab, setActiveTab] = useState("thakbakidar");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="addnc-container">
      <div className="tabs">
        <button
          className={`tablinks ${activeTab === "thakbakidar" ? "active" : ""}`}
          onClick={() => handleTabClick("thakbakidar")}
        >
          थकबाकीदार माहिती
        </button>
        <button
          className={`tablinks ${activeTab === "jamin" ? "active" : ""}`}
          onClick={() => handleTabClick("jamin")}
        >
          जामीनदार माहिती
        </button>
        <button
          className={`tablinks ${activeTab === "karja" ? "active" : ""}`}
          onClick={() => handleTabClick("karja")}
        >
          कर्जाची माहिती
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "thakbakidar" && (
          <div className="tabcontent active">
            <h3>थकबाकीदार माहिती</h3>
            <form>
              <div className="form-row">
                <label>नोंदणी क्र.</label>
                <input
                  type="text"
                  value="JAL/RSR/CR/421/04 Date : 12/08/20"
                  readOnly
                />
              </div>
              <div className="form-row">
                <label>ब्रँच चे नाव</label>
                <select>
                  <option>Select</option>
                  {/* Add other options */}
                </select>
                <label>संस्थेचा पत्ता</label>
                <input type="text" />
                <label>मॅनेजरचे नाव</label>
                <input type="text" value="देशपांडे विवेक" readOnly />
              </div>

              <div className="form-row">
                <label>
                  सुनावणीस हजर राहण्यासाठी अधिकार असलेली प्राधिकृत व्यक्ती
                </label>
                <div>
                  <input type="radio" name="authority" value="manjur" /> मंजूर
                  <input type="radio" name="authority" value="adhikari" />{" "}
                  अधिकारी
                </div>
              </div>
              <div className="form-row">
                <label>वकिलाचे नाव</label>
                <select>
                  <option>Select</option>
                  {/* Add other options */}
                </select>
              </div>
              <div className="form-section">
                <h3 style={{ marginTop: "10px" }}>थकबाकीदार</h3>
                <div className="form-row">
                  <label>नाव *</label>
                  <input type="text" required />
                </div>
                <div className="form-row">
                  <label>पत्ता *</label>
                  <input type="text" required />
                  <label style={{ marginLeft: "100px" }}>वय</label>
                  <input type="number" value="0" min="0" />
                </div>
                <div className="form-row">
                  <label>जिल्हा *</label>
                  <select required>
                    <option>Select</option>
                    {/* Add other options */}
                  </select>
                  <label style={{ marginLeft: "100px" }}>तालुका *</label>
                  <select required>
                    <option>Select</option>
                    {/* Add other options */}
                  </select>
                </div>
                <div className="form-row">
                  <label>गाव *</label>
                  <input type="text" required />
                  <label style={{ marginLeft: "100px" }}>पिन</label>
                  <input type="text" />
                </div>

                <div className="form-row">
                  <label>मोबाईल नं.</label>
                  <input type="text" />
                  <label style={{ marginLeft: "100px" }}>ई-मेल</label>
                  <input type="email" />
                </div>
                <div className="form-row">
                  <label>व्यवसाय *</label>
                  <input type="text" required />
                </div>
              </div>
              <hr />
              <button type="submit" className="submit-btn">
                जतन करा
              </button>
            </form>
          </div>
        )}
        {activeTab === "jamin" && <JaminInfo />}{" "}
        {/* Include the new JaminInfo component */}
        {activeTab === "karja" && (
          <div className="tabcontent active">
            <h3>कर्जाची माहिती</h3>
            {/* Content for कर्जाची माहिती */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Addnc;
