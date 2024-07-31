import React from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <form className="form">
        <p className="form-title">REGISTRATION</p>
        <div className="form-group">
          <div className="input-group">
            <div className="icheck-inline">
              <label style={{ marginRight: "20px" }}>
                <input
                  type="radio"
                  name="type"
                  checked
                  class="icheck"
                  value="S"
                />
                संस्था
              </label>
              <label>
                <input type="radio" name="type" class="icheck" value="F" />{" "}
                फेडरेशन
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <select name="sanstha_type" class="form-control">
            <option value="">संस्था प्रकार </option>
            <option selected value="1">
              {" "}
              पतसंस्था{" "}
            </option>
            <option value="2">सहकारी बँक </option>
            <option value="3">हौसिंग सोसायटी </option>
          </select>
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="संस्था नाव"
            name="name"
            required
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="नोंदणी क्र."
            name="registration_number"
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="पत्ता"
            name="address"
          />
        </div>
        <div className="form-group">
          <select name="district_id" id="district_id" className="form-control">
            <option>जिल्हा निवडा</option>
          </select>
        </div>
        <div className="form-group">
          <select name="taluka_id" id="taluka_id" className="form-control">
            <option>तालुका</option>
          </select>
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="गाव निवडा"
            name="city"
            id="city"
          />
          <input type="hidden" name="city_id" id="city_id" />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            placeholder="संपर्क अधिकारी"
            name="contact_manager"
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            id="phone_number"
            placeholder="फ़ोन नंबर ( एस.टी.डी. कोडसहित )"
            name="phone_number"
            pattern="[0-9]{10}"
            title="only numbers are allowed"
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            id="mobile"
            autocomplete="off"
            placeholder="मोबाईल नंबर"
            name="mobile"
            pattern="[0-9]{10}"
            title="only numbers are allowed"
            minlength="10"
            maxlength="10"
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="email"
            autocomplete="off"
            placeholder="इ - मेल आयडी"
            name="email"
          />
        </div>
        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            id="branch_count"
            autocomplete="off"
            placeholder="शाखा संख्या"
            name="branch_count"
            pattern="[0-9]{3}"
            maxlength="3"
          />
        </div>

        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="text"
            id="organization_size"
            autocomplete="off"
            placeholder="संस्थेचा आकार (करोड मध्ये)"
            name="organization_size"
          />
        </div>

        <div className="input-container">
          <input
            className="form-control placeholder-no-fix uname"
            type="text"
            autocomplete="off"
            placeholder="संस्थेचा ऍडमिन युजरनेम"
            name="username1"
            id="username1"
          />
        </div>

        <div className="input-container">
          <input
            className="form-control placeholder-no-fix"
            type="password"
            autocomplete="new-password"
            placeholder="पासवर्ड"
            name="password"
          />
        </div>
        {/* <div class="input-container">
            <label class="check">
		        <input type="checkbox" value="Y" name="terms_conditions"/> <a href="javascript:;">
		        मला सर्व अटी व शर्थी मान्य आहेत. </a>
	        </label>
        </div> */}
        <button className="submit" type="submit">
          जतन करा
        </button>

        <p className="signup-link">
          Already registered!
          <a
            style={{ marginLeft: "5px", cursor: "pointer", color: "blue" }}
            onClick={handleLogin}
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signin;
