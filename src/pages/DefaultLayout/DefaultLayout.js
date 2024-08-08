import React from "react";
import Header from "../../components/Head/header";
import { Outlet, useLocation } from "react-router-dom";

function DefaultLayout() {
  const location = useLocation();
  const hideheader = ["/", "/signin"];
  return (
    <div>
      <div>{!hideheader.includes(location.pathname) && <Header />}</div>
      <div>
        <Outlet />
      </div>
      {/* <div>foter</div> */}
    </div>
  );
}

export default DefaultLayout;
