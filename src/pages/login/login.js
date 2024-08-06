import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { luser } from "../../components/apicall/Api";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const payload = {
        idlogin: formData.username,
        appshortname: "craas",
        pwd: formData.password,
      };
      const response = await luser(payload);
      console.log("Login Response:", response);

      if (response.Success === true) {
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred during login");
    }
  };

  const handleSignup = () => {
    navigate("/signin");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-logo">
      <div>
        <form className="login-form" onSubmit={handleSubmit}>
          <p className="login-form-title">LOGIN</p>
          <div className="login-input-container">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              minLength="10"
              maxLength="10"
              pattern="[0-9]{10}"
            />
            <span></span>
          </div>
          <div className="login-input-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              minLength="10"
              maxLength="10"
              pattern="[0-9]{10}"
              required
            />
          </div>

          {error && <p className="login-error-message">{error}</p>}

          <div className="login-checkbox">
            <input
              type="checkbox"
              onChange={toggleShowPassword}
              style={{ marginRight: "10px" }}
            />
            <label>Show password</label>
          </div>

          <button
            type="submit"
            className="login-submit"
            style={{ marginTop: "20px" }}
          >
            Login
          </button>

          <div className="login-remember">
            <input
              type="checkbox"
              style={{ marginRight: "10px", marginTop: "20px" }}
            />
            Remember
            <button
              style={{
                marginLeft: "100px",
                fontSize: "15px",
                marginTop: "20px",
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Forgot Password
            </button>
          </div>
          <br />
          <div
            onClick={handleSignup}
            className="login-registration-link"
            style={{
              textAlign: "center",
              height: "40px",
              padding: "5px",
              backgroundColor: "orange",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                fontSize: "15px",
                color: "white",
                textAlign: "center",
                background: "none",
                border: "none",
              }}
            >
              नवीन फेडरेशन / संस्था रजिस्ट्रेशन करा
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;