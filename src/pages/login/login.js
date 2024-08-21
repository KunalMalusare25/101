import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { luser } from "../../components/apicall/Api";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuth();

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
      setUser(response?.Message);
      // console.log("Login Response:", response);

      if (response.Success) {
        {
          response?.Message?.User?.societycode
            ? navigate("/dashboard")
            : navigate("/fedardash");
        }
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
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-custom max-w-sm w-full">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold text-center">LOGIN</h1>
          <div>
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
              className="w-full p-3 border rounded-lg outline-none focus:border-blue-500"
            />
          </div>
          <div>
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
              className="w-full p-3 border rounded-lg outline-none focus:border-blue-500"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex items-center">
            <input
              type="checkbox"
              onChange={toggleShowPassword}
              className="mr-2"
            />
            <label>Show password</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          <div className="flex items-center justify-between mt-4">
            <div className="w-1/2 sm:w-1/2">
              <input type="checkbox" className="mr-2" />
              <label>Remember</label>
            </div>
            <button
              type="button"
              className="text-blue-500 underline w-1/2 sm:w-1/2"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password
            </button>
          </div>
          <div
            onClick={handleSignup}
            className="text-center mt-4 bg-orange-500 text-white py-2 rounded-lg cursor-pointer"
          >
            <span>नवीन फेडरेशन / संस्था रजिस्ट्रेशन करा</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
