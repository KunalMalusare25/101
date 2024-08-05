import React, { useEffect, useState } from "react";
import "./addnc.css";
import JaminInfo from "./jamin";
import KarjadaarInfo from "./karjadaarInfo";
import { fetchDistricts, fetchTalukas } from "../../../components/apicall/Api";

const Addnc = () => {
  const [activeTab, setActiveTab] = useState("thakbakidar");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const [formData, setFormData] = useState({
    district: "",
    taluka: "",
  });
  const [districts, setDistricts] = useState([]);
  const [talukas, setTalukas] = useState([]);

  useEffect(() => {
    const loadDistracts = async () => {
      try {
        const response = await fetchDistricts(); 
        console.log(response);
        setDistricts(response.Message); 
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    loadDistracts();
  }, []);

  useEffect(() => {
    if (formData.district) {
      const loadTalukas = async () => {
        try {
          const response = await fetchTalukas(formData.district); 
          setTalukas(response.Message);
        } catch (error) {
          console.error("Error fetching talukas:", error);
        }
      };

      loadTalukas();
    } else {
      setTalukas([]); // Clear talukas when no district is selected
    }
  }, [formData.district]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="addnc-container-nc">
      <div className="tabs-nc">
        <button
          className={`tablinks-nc ${
            activeTab === "thakbakidar" ? "active-nc" : ""
          }`}
          onClick={() => handleTabClick("thakbakidar")}
        >
          थकबाकीदार माहिती
        </button>
        <button
          className={`tablinks-nc ${activeTab === "jamin" ? "active-nc" : ""}`}
          onClick={() => handleTabClick("jamin")}
        >
          जामीनदार माहिती
        </button>
        <button
          className={`tablinks-nc ${activeTab === "karja" ? "active-nc" : ""}`}
          onClick={() => handleTabClick("karja")}
        >
          कर्जाची माहिती
        </button>
      </div>

      <div className="tab-content-nc">
        {activeTab === "thakbakidar" && (
          <div className="tabcontent-nc active-nc">
            <h3>थकबाकीदार माहिती</h3>
            <form>
              <div className="form-row-nc">
                <label>नोंदणी क्र.</label>
                <input
                  type="text"
                  value="JAL/RSR/CR/421/04 Date : 12/08/20"
                  readOnly
                />
              </div>
              <div className="form-row-nc">
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

              <div className="form-row-nc">
                <label>
                  सुनावणीस हजर राहण्यासाठी अधिकार असलेली प्राधिकृत व्यक्ती
                </label>
                <div className="radio-nc">
                  <div>
                    <input type="radio" name="authority" value="manjur" /> मंजूर
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <input type="radio" name="authority" value="adhikari" />
                    अधिकारी
                  </div>
                </div>
              </div>
              <div className="form-row-nc">
                <label>वकिलाचे नाव</label>
                <select>
                  <option>Select</option>
                  {/* Add other options */}
                </select>
              </div>
              <div className="form-section-nc">
                <h3 style={{ marginTop: "10px" }}>थकबाकीदार</h3>
                <div className="form-row-nc">
                  <label>नाव *</label>
                  <input type="text" required />
                </div>
                <div className="form-row-nc">
                  <label>पत्ता *</label>
                  <input type="text" required />
                  <label style={{ marginLeft: "100px" }}>वय</label>
                  <input type="number" value="0" min="0" />
                </div>
                <div className="form-row-nc">
                  <label>जिल्हा *</label>
                  <select
            name="district"
            value={formData.district}
            onChange={handleChange}
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district.code} value={district.code}>
                {district.descn}
              </option>
            ))}
          </select>
                  <label style={{ marginLeft: "100px" }}>तालुका *</label>
                  <select name="taluka" 
                  value={formData.taluka} 
                  onChange={handleChange}>
                  disabled={!formData.district}
                  <option value="" disabled>
              {formData.district ? "Select Taluka" : "Select a District First"}
            </option>
            {talukas.map(taluka => (
                            <option key={taluka.code} value={taluka.code}>
                                {taluka.descn}
                            </option>
                        ))}
          </select>
                </div>
                <div className="form-row-nc">
                  <label>गाव *</label>
                  <input type="text" required />
                  <label style={{ marginLeft: "100px" }}>पिन</label>
                  <input type="text" />
                </div>

                <div className="form-row-nc">
                  <label>मोबाईल नं.</label>
                  <input type="text" />
                  <label style={{ marginLeft: "100px" }}>ई-मेल</label>
                  <input type="email" />
                </div>

                <div className="form-row-nc">
                  <label>CIN नं.</label>
                  <input type="text" />
                  <label style={{ marginLeft: "100px" }}>Account No</label>
                  <input type="email" />
                </div>

                <div className="form-row-nc">
                  <label>व्यवसाय *</label>
                  <input type="text" required />
                </div>
              </div>
              <hr />
              <button type="submit" className="submit-btn-nc">
                जतन करा
              </button>
            </form>
          </div>
        )}
        {activeTab === "jamin" ? <JaminInfo /> : null}
        {activeTab === "karja" ? <KarjadaarInfo /> : null}
      </div>
    </div>
  );
};

export default Addnc;
