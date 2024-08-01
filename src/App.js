import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Signin from "./pages/signup/signin";
import Dashboard from "./pages/Dashboard/dashboard";
import DefaultLayout from "./pages/DefaultLayout/DefaultLayout";
import NewCase from "./pages/Case/NewCase";
import TranferAR from "./pages/Case/TranferAR";
import Inprocess from "./pages/Case/Inprocess";
import Closed from "./pages/Case/Closed";
import Reject from "./pages/Case/Reject";
import RejectReason from "./pages/Case/rejectreason/RejectReason";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signin" element={<Signin />} />
          <Route path="newcase" element={<NewCase />} />
          <Route path="tranferar" element={<TranferAR />} />
          <Route path="inprocess" element={<Inprocess />} />
          <Route path="closed" element={<Closed />} />
          <Route path="reject" element={<Reject />} />
          <Route path="rejectreason" element={<RejectReason />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
