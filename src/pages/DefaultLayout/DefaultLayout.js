import React from "react";
import Header from "../../components/Head/header";
import { Outlet, useLocation } from "react-router-dom";

function DefaultLayout() {
  const location = useLocation();
  const hideheader = ["/", "/signin"];
  
  return (
    <div>
      <div className={`print-hidden`}>
        {!hideheader.includes(location.pathname) && <Header />}
      </div>
      <div>
        <Outlet />
      </div>
      {/* <div className="print-hidden">footer</div> */}
    </div>
  );
}

export default DefaultLayout;
