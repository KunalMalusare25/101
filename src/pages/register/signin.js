import React, { useState, useEffect } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import {
  AddUpdate_society,
  fetchDistricts,
} from "../../components/apicall/Api";

const Signin = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("S");
  const [sansthaType, setSansthaType] = useState("");
  const [formData, setFormData] = useState({
    descn: "",
    descn1: "",
    pan: "",
    gstn: "",
    phone: "",
    address: "",
    address1: "",
    pincode: "411043", // Hardcoded value for now
    contactperson: "",
    contactemail: "",
    contactmobile: "9822938333",
    district: "",
    taluka: "",
    active: true,
  });

  const [districts, setDistricts] = useState([]);
  // const [talukas, setTalukas] = useState([]);

  useEffect(() => {
    // Fetch districts when the component mounts
    const loadDistracts = async () => {
      try {
        const response = await fetchDistricts(); // Adjust the function call based on your API response structure
        console.log(response);
        setDistricts(response.data); // Assuming response.data contains the list of districts
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    loadDistracts();
  }, []);

  // useEffect(() => {
  //     if (formData.district) {
  //         // Fetch talukas based on the selected district
  //         fetchTalukas(formData.district)
  //             .then(data => setTalukas(data))
  //             .catch(error => console.error('Error fetching talukas:', error));
  //     } else {
  //         setTalukas([]);
  //     }
  // }, [formData.district]);

  const handleLogin = () => {
    navigate("/");
  };

  const handleRadioChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSansthaType(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        data: [
          {
            recno: 0, // Default value
            tenantcode: 2,
            code: 0,
            descn: formData.descn,
            descn1: formData.descn1,
            pan: formData.pan,
            gstn: formData.gstn,
            phone: formData.phone,
            district_id: formData.district,
            taluka_id: formData.taluka,
            address: formData.address,
            address1: formData.address1,
            pincode: formData.pincode,
            contactperson: formData.contactperson,
            contactemail: formData.contactemail,
            contactmobile: formData.contactmobile,
            active: formData.active,
          },
        ],
      };

      const response = await AddUpdate_society(payload);
      console.log(response, "response");
      if (response.Success === true) {
        navigate("/");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">REGISTRATION</p>
        <div className="form-group">
          <div className="input-group">
            <div className="icheck-inline">
              <label style={{ marginRight: "20px" }}>
                <input
                  type="radio"
                  name="type"
                  checked={selectedType === "S"}
                  onChange={handleRadioChange}
                  className="icheck"
                  value="S"
                />{" "}
                संस्था
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  checked={selectedType === "F"}
                  onChange={handleRadioChange}
                  className="icheck"
                  value="F"
                />{" "}
                फेडरेशन
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <select
            name="sanstha_type"
            className="form-control"
            value={sansthaType}
            onChange={handleTypeChange}
          >
            <option value="">संस्था प्रकार</option>
            <option value="1">पतसंस्था</option>
            <option value="2">सहकारी बँक</option>
            <option value="3">हौसिंग सोसायटी</option>
          </select>
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="संस्था नाव"
            name="descn"
            value={formData.descn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="वर्णन"
            name="descn1"
            value={formData.descn1}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="PAN नंबर"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="GST नंबर"
            name="gstn"
            value={formData.gstn}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
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
        </div>
        <div className="form-group">
          <select name="taluka" value={formData.taluka} onChange={handleChange}>
            <option value="">Select Taluka</option>
            {/* {talukas.map(taluka => (
                            <option key={taluka.code} value={taluka.code}>
                                {taluka.descn}
                            </option>
                        ))} */}
          </select>
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="पत्ता"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="पत्ता (शहर)"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="फ़ोन नंबर ( एस.टी.डी. कोडसहित )"
            name="phone"
            minLength="10"
            maxLength="10"
            pattern="[0-9]{10}"
            title="only numbers are allowed"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="संपर्क अधिकारी"
            name="contactperson"
            value={formData.contactperson}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="email"
            autoComplete="off"
            placeholder="इ - मेल आयडी"
            name="contactemail"
            value={formData.contactemail}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit" type="submit">
          जतन करा
        </button>

        <p className="signup-link">
          Already registered!
          <button
            style={{ marginLeft: "5px", cursor: "pointer" }}
            onClick={handleLogin}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signin;