import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AddUpdate_society,
} from "../../components/apicall/Api";
import { useDistrictTaluka } from "../../context/DistrictTalukaContext";

const Signin = () => {
  const navigate = useNavigate();
  const {
    districts,
    talukas,
    setSelectedDistrict,
  } = useDistrictTaluka();
  
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
    contactmobile: "",
    district: "",
    taluka: "",
    active: true,
  });

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
    if (name === "district") {
      setSelectedDistrict(value);
    }
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
            district_id: formData.district,
            taluka_id: formData.taluka,
            address: formData.address,
            address1: formData.address1,
            pincode: formData.pincode,
            contactperson: formData.contactperson,
            contactemail: formData.contactemail,
            contactmobile: formData.phone,
            active: formData.active,
          },
        ],
      };
      console.log(payload)
      const response = await AddUpdate_society(payload);
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold text-center mb-4">REGISTRATION</h1>

          <div className="mb-4 flex justify-center">
            <label className="mr-4">
              <input
                type="radio"
                name="type"
                checked={selectedType === "S"}
                onChange={handleRadioChange}
                value="S"
                className="mr-2"
              />
              संस्था
            </label>
            <label>
              <input
                type="radio"
                name="type"
                checked={selectedType === "F"}
                onChange={handleRadioChange}
                value="F"
                className="mr-2"
              />
              फेडरेशन
            </label>
          </div>

          <div className="mb-4">
            <select
              name="sanstha_type"
              value={sansthaType}
              onChange={handleTypeChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">संस्था प्रकार</option>
              <option value="1">पतसंस्था</option>
              <option value="2">सहकारी बँक</option>
              <option value="3">हौसिंग सोसायटी</option>
            </select>
          </div>

          {[
            { name: "descn", placeholder: "संस्था नाव", type: "text" },
            { name: "descn1", placeholder: "वर्णन", type: "text" },
            { name: "pan", placeholder: "PAN नंबर", type: "text" },
            { name: "gstn", placeholder: "GST नंबर", type: "text" },
            { name: "address", placeholder: "पत्ता", type: "text" },
            { name: "address1", placeholder: "पत्ता (शहर)", type: "text" },
            {
              name: "phone",
              placeholder: "फ़ोन नंबर ( एस.टी.डी. कोडसहित )",
              type: "text",
              minLength: "10",
              maxLength: "10",
              pattern: "[0-9]{10}",
              title: "only numbers are allowed",
            },
            { name: "contactperson", placeholder: "संपर्क अधिकारी", type: "text" },
            { name: "contactemail", placeholder: "इ - मेल आयडी", type: "email" },
          ].map((inputProps) => (
            <div className="mb-4" key={inputProps.name}>
              <input
                {...inputProps}
                value={formData[inputProps.name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          ))}

          <div className="mb-4">
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district.code} value={district.code}>
                  {district.descn}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <select
              name="taluka"
              value={formData.taluka}
              onChange={handleChange}
              disabled={!formData.district}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="" disabled>
                {formData.district ? "Select Taluka" : "Select a District First"}
              </option>
              {talukas.map((taluka) => (
                <option key={taluka.code} value={taluka.code}>
                  {taluka.descn}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            जतन करा
          </button>

          <p className="text-center mt-4">
            Already registered?
            <button
              type="button"
              onClick={handleLogin}
              className="text-blue-500 underline ml-1"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
