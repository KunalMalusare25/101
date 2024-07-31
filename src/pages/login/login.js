import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const handleSignin = () => {
    navigate("/signin");
  };

  return (
    <div className="logo">
      <img src="" alt=""></img>

      <div>
        <form class="form">
          <p class="form-title">LOGIN</p>
          <div class="input-container">
            <input type="text" placeholder="Username" />
            <span></span>
          </div>
          <div class="input-container">
            <input type="password" placeholder="Enter password" />
          </div>

          <div className="checkbox">
            <input type="checkbox" style={{ marginRight: "10px" }} />
            <label>Show password</label>
          </div>

          <div className="captch" style={{ marginTop: "10px" }}>
            <label>Captcha</label>
            <br />
            <textarea
              style={{ borderRadius: "10px 10px 10px 10px", height: "40px" }}
            ></textarea>
          </div>

          <div className="entercaptch">
            <label style={{ marginTop: "20px" }}>Enter Captcha Text</label>
            <br />
            <input
              type="text"
              placeholder=" Enter Captcha "
              style={{
                width: "320px",
                height: "40px",
                borderRadius: "10px 10px 10px 10px",
              }}
            />
          </div>

          <button
            type="submit"
            class="submit"
            style={{ marginTop: "20px" }}
            onClick={handleDashboard}
          >
            Login
          </button>

          <div className="remember">
            <input
              type="checkbox"
              style={{ marginRight: "10px", marginTop: "10px" }}
            />
            Remember
            <a
              href=""
              style={{
                marginLeft: "6rem",
                fontSize: "15px",
                marginTop: "20px",
              }}
            >
              Forgot Password
            </a>
          </div>
          <br />
          <hr />

          <div
            className="registration-link"
            style={{
              height: "40px",
              padding: "10px",
              marginTop: "20px",
              backgroundColor: "orange",
              borderRadius: "10px 10px 10px 10px",
            }}
          >
            <a
              onClick={handleSignin}
              style={{
                fontSize: "15px",
                display: "flex",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              नवीन फेडरेशन / संस्था रजिस्ट्रेशन करा
            </a>
          </div>
        </form>
      </div>
      {/* <div className="footer">
        <text style={{ color: "white" }}>
          2024 © Karwai 101. Powered by Sutradhar.
        </text>
      </div> */}
    </div>
  );
};

export default Login;
