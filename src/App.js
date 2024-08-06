import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/dashboard";
import DefaultLayout from "./pages/DefaultLayout/DefaultLayout";
import NewCase from "./pages/Case/NewCase";
import TranferAR from "./pages/Case/TranferAR";
import Inprocess from "./pages/Case/Inprocess";
import Closed from "./pages/Case/Closed";
import Reject from "./pages/Case/Reject";
import RejectReason from "./pages/Case/rejectreason/RejectReason";
import Signin from "./pages/register/signin";
import Login from "./pages/login/login";

import MakeReport from "./pages/reportview/makereport/MakeReport";
import Makeexcel from "./pages/reportview/makeexcel/Makeexcel";
import Inforeport from "./pages/reportview/jaab/Inforeport";
import Addnc from "./pages/Case/AddCase/addnc";
import UploadDoc from "./pages/Case/documentupload/UploadDoc";
import Old from "./pages/old/old";

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

          <Route path="makereport" element={<MakeReport />} />
          <Route path="makeexcel" element={<Makeexcel />} />
          <Route path="inforeport" element={<Inforeport />} />

          <Route path="addcase" element={<Addnc />} />
          <Route path="uploadDoc" element={<UploadDoc />} />
          <Route path="old-karwai" element={<Old />}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
