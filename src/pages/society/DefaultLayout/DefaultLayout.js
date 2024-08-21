import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/Head/header";
import Feaderhead from "../../fedration/fedarhead/Feaderhead";
import { useAuth } from "../../../context/AuthContext";

function DefaultLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const hideheader = ["/", "/signin"];
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div>
      <div className={`print-hidden`}>
        {!hideheader.includes(location.pathname) &&
          (user?.User?.societycode ? <Header /> : <Feaderhead />)}
      </div>
      <div>
        <Outlet />
      </div>
      {/* <div className="print-hidden">footer</div> */}
    </div>
  );
}

export default DefaultLayout;
