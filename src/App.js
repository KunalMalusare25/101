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

import Roznama from "./pages/Case/roznama/Roznama";

import Old from "./pages/old/old";
import Notice1 from "./pages/reportview/makereport/notice/Notice1";
import Fedarationdash from "./pages/fedration/fedardash/Fedarationdash";

import Firstnotice from "./pages/reportview/makereport/notice/Firstnotice";

import Antimnotice from "./pages/reportview/makereport/notice/Antimnotice";

import TrdHafta from "./pages/reportview/makereport/notice/3rd_hafta";
import SndHafta from "./pages/reportview/makereport/notice/2nd_hafta";
import FirstHafta from "./pages/reportview/makereport/notice/1st_hafta";
import Prakar1 from "./pages/reportview/makereport/notice/Prakar1";
import Prakar2 from "./pages/reportview/makereport/notice/Prakar2";
import Kalamnotice from "./pages/reportview/makereport/notice/Kalamnotice";
import Affidavit from "./pages/reportview/makereport/notice/Affidavit";
import Challanpage from "./pages/reportview/makereport/notice/Challanpage";
import Dakhalallnotice from "./pages/reportview/makereport/notice/Dakhalallnotice";
import Labelprint from "./pages/reportview/makereport/notice/Labelprint";
import RegisterPavti from "./pages/reportview/makereport/notice/RegisterPavti";
import NamunaU from "./pages/reportview/makereport/notice/NamunaU";

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
          <Route path="roz" element={<Roznama />} />
          <Route path="old-karwai" element={<Old />} />

          {/* # NOTICES */}
          <Route path="FirstNotice" element={<Firstnotice />} />
          <Route path="Third-Hafta" element={<TrdHafta />} />
          <Route path="Second-Hafta" element={<SndHafta />} />
          <Route path="First-Hafta" element={<FirstHafta />} />
          <Route path="Magni-Notice-Prakar1" element={<Prakar1 />} />
          <Route path="Magni-Notice-Prakar2" element={<Prakar2 />} />

          {/* notice-section */}

          <Route path="kalam" element={<Kalamnotice />} />
          <Route path="challan" element={<Challanpage />} />
          <Route path="Antim-notice" element={<Antimnotice />} />
          <Route path="affidavit" element={<Affidavit />} />
          <Route path="dakhal" element={<Dakhalallnotice />} />
          <Route path="labelprint" element={<Labelprint />} />
          <Route path="registerpavti" element={<RegisterPavti />} />
          <Route path="namuna-u" element={<NamunaU />} />
          <Route path="notice-1" element={<Notice1 />} />
          {/* FEDRATION */}
          <Route path="fedardash" element={<Fedarationdash />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
