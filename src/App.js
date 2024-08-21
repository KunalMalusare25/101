import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

// society

import NewCase from "./pages/society/Case/NewCase";
import TranferAR from "./pages/society/Case/TranferAR";
import Inprocess from "./pages/society/Case/Inprocess";
import Closed from "./pages/society/Case/Closed";
import Reject from "./pages/society/Case/Reject";
import RejectReason from "./pages/society/Case/rejectreason/RejectReason";
import Signin from "./pages/register/signin";
import Login from "./pages/login/login";
import MakeReport from "./pages/society/reportview/makereport/MakeReport";
import Makeexcel from "./pages/society/reportview/makeexcel/Makeexcel";
import Inforeport from "./pages/society/reportview/jaab/Inforeport";
import Addnc from "./pages/society/Case/AddCase/addnc";
import UploadDoc from "./pages/society/Case/documentupload/UploadDoc";
import Roznama from "./pages/society/Case/roznama/Roznama";
import Old from "./pages/society/old/old";
import Notice1 from "./pages/society/reportview/makereport/notice/Notice1";
import Firstnotice from "./pages/society/reportview/makereport/notice/Firstnotice";
import Antimnotice from "./pages/society/reportview/makereport/notice/Antimnotice";
import TrdHafta from "./pages/society/reportview/makereport/notice/3rd_hafta";
import SndHafta from "./pages/society/reportview/makereport/notice/2nd_hafta";
import FirstHafta from "./pages/society/reportview/makereport/notice/1st_hafta";
import Prakar1 from "./pages/society/reportview/makereport/notice/Prakar1";
import Prakar2 from "./pages/society/reportview/makereport/notice/Prakar2";
import Kalamnotice from "./pages/society/reportview/makereport/notice/Kalamnotice";
import Affidavit from "./pages/society/reportview/makereport/notice/Affidavit";
import Challanpage from "./pages/society/reportview/makereport/notice/Challanpage";
import Dakhalallnotice from "./pages/society/reportview/makereport/notice/Dakhalallnotice";
import Labelprint from "./pages/society/reportview/makereport/notice/Labelprint";
import RegisterPavti from "./pages/society/reportview/makereport/notice/RegisterPavti";
import Tharav from "./pages/society/reportview/makereport/notice/tharav";
import Jawab from "./pages/society/reportview/makereport/notice/jawab";
import RojnamaX from "./pages/society/reportview/makereport/notice/rojx";
import RoznamaNot from "./pages/society/reportview/makereport/notice/roznama";
import NamunaV from "./pages/society/reportview/makereport/notice/namunaV";
import NamunaU from "./pages/society/reportview/makereport/notice/NamunaU";
import EkSet from "./pages/society/reportview/makereport/notice/EkSet";

// fedration
import Fedarationdash from "./pages/fedration/fedardash/Fedarationdash";
import FedarClosedCase from "./pages/fedration/fedarClosed/FedarClosedCase";
import FedarInprocess from "./pages/fedration/fedarInprocess/FedarInprocess";
import FedarNewCase from "./pages/fedration/fedarNewcase/FedarNewCase";
import CasetoAr from "./pages/society/Case/Casetoar";

import Dashboard from "./pages/society/Dashboard/dashboard";
import DefaultLayout from "./pages/society/DefaultLayout/DefaultLayout";
import FedarcloseReason from "./pages/fedration/fedarclosedreason/FedarcloseReason";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
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
          <Route path="casetoar" element={<CasetoAr />} />

          {/* # NOTICES */}
          <Route path="FirstNotice" element={<Firstnotice />} />
          <Route path="Third-Hafta" element={<TrdHafta />} />
          <Route path="Second-Hafta" element={<SndHafta />} />
          <Route path="First-Hafta" element={<FirstHafta />} />
          <Route path="Magni-Notice-Prakar1" element={<Prakar1 />} />
          <Route path="Magni-Notice-Prakar2" element={<Prakar2 />} />
          <Route path="Tharav" element={<Tharav />} />
          <Route path="Jawab" element={<Jawab />} />
          <Route path="RojnamaX" element={<RojnamaX />} />
          <Route path="Roznama" element={<RoznamaNot />} />
          <Route path="Namuna_V" element={<NamunaV />} />

          {/* notice-section */}
          <Route path="kalam" element={<Kalamnotice />} />
          <Route path="challan" element={<Challanpage />} />
          <Route path="Antim-notice" element={<Antimnotice />} />
          <Route path="affidavit" element={<Affidavit />} />
          <Route path="dakhal" element={<Dakhalallnotice />} />
          <Route path="labelprint" element={<Labelprint />} />
          <Route path="registerpavti" element={<RegisterPavti />} />
          <Route path="namuna-u" element={<NamunaU />} />
          <Route path="ekset" element={<EkSet />} />
          <Route path="notice-1" element={<Notice1 />} />

          {/* FEDRATION */}
          <Route path="fedardash" element={<Fedarationdash />} />
          <Route path="fedarnewcase" element={<FedarNewCase />} />
          <Route path="fedarinprocess" element={<FedarInprocess />} />
          <Route path="fedarclosedcase" element={<FedarClosedCase />} />
          <Route path="fedarclosereason" element={<FedarcloseReason />} />
        </Route>
      </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
