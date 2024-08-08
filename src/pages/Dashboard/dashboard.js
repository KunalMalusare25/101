import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handlecaseNavigate = (path) => {
    navigate(path);
  };
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const handleButtonClick = (button) => {
    setActiveButton((prevButton) => (prevButton === button ? "" : button));
  };

  return (
    <>
      <div className="Das-dash-statistics">
        <h2>Dashboard</h2>
        <p>Statistics & Reports</p>
      </div>
      <div className="Das-DashContain">
        <div className="Das-card-left">
          <h2 className="Das-card-title">CASE SUMMARY</h2>
          <div className="Das-date-time">
            <h5>{formatDate(currentTime)}</h5>
          </div>
          <hr />
          <div className="Das-cases-list">
            <div>
              <label>Total Cases</label>
              <h1 onClick={() => handlecaseNavigate("/newcase")}>178</h1>
            </div>
            <div>
              <label>InProgress Cases</label>
              <h1 onClick={() => handlecaseNavigate("/inprocess")}>117</h1>
            </div>
            <div>
              <label>Closed Cases</label>
              <h1 onClick={() => handlecaseNavigate("/closed")}>2</h1>
            </div>
          </div>
        </div>
        <div className="Das-card-right ">
          <h2 className="Das-card-title">STAMP CALCULATION</h2>
          <button
            className="Das-button"
            onClick={() => handleButtonClick("केस नं. १ (पहा)")}
          >
            केस नं. १ (पहा)
          </button>

          {activeButton === "केस नं. १ (पहा)" && (
            <div className="Das-clicked-text">
              <p>
                जर एकूण वसूलपात्र रक्कम एक लाख रु. पेक्षा कमी असल्यास ,
                स्टॅम्पची रक्कम = (एकूण वसूलपात्र रक्कम ) X (२%) किंवा १०० रु.
                यापैकी जास्त रक्कम एकूण स्टॅम्पची रक्कम = स्टॅम्पची रक्कम +
                अर्जास लावायचा कोर्ट फी स्टॅम्प (१००) उदा. जर वसूलपात्र रक्कम
                ५०,००० रुपये असेल तर स्टॅम्पची रक्कम होईल ,५०,००० च्या २% = १०००
                रु.
                <br />
                <br />
                एकूण स्टॅम्पची रक्कम होईल १००० रु. + १०० रु. अर्जाला लावण्याचा
                कोर्ट फी स्टॅम्प = ११०० रु.
                <br />
                <br />
                जर एकूण वसूलपात्र रक्कम एक लाख रु. ते ५ लाखापेक्षा कमी असल्यास ,
                स्टॅम्पची रक्कम = (एकूण वसूलपात्र रक्कम ) X (१% + २०००) किंवा
                जास्तीत जास्त ६००० रु. एकूण स्टॅम्पची रक्कम = स्टॅम्पची रक्कम +
                अर्जास लावायचा कोर्ट फी स्टॅम्प (१००) उदा. जर वसूलपात्र रक्कम
                २,००,००० रुपये असेल तर स्टॅम्पची रक्कम होईल , २,००,००० च्या १% =
                २००० रु. + २००० रु.= ४००० रु. एकूण स्टॅम्पची रक्कम होईल ४००० रु.
                + १०० रु. अर्जाला लावण्याचा कोर्ट फी स्टॅम्प = ४१०० रु.
                <br />
                <br />
                जर एकूण वसूलपात्र रक्कम ५ लाख रु. किंवा त्यापेक्षा जास्त असल्यास
                , स्टॅम्पची रक्कम = (एकूण वसूलपात्र रक्कम ) X (०.५% + ६०००)
                किंवा जास्तीत जास्त २५००० रु. एकूण स्टॅम्पची रक्कम = स्टॅम्पची
                रक्कम + अर्जास लावायचा कोर्ट फी स्टॅम्प (१००) उदा. जर वसूलपात्र
                रक्कम ६,००,००० रुपये असेल तर स्टॅम्पची रक्कम होईल , ६,००,०००
                च्या ०.५% =३००० रु. + ६००० रु.= ९००० रु. एकूण स्टॅम्पची रक्कम
                होईल ९००० रु. + १०० रु. अर्जाला लावण्याचा कोर्ट फी स्टॅम्प =
                ९१०० रु.
              </p>
            </div>
          )}
          <button
            className="Das-button"
            onClick={() => handleButtonClick("केस नं. २ (पहा)")}
          >
            केस नं. २ (पहा)
          </button>
          {activeButton === "केस नं. २ (पहा)" && (
            <div className="Das-clicked-text">
              <p>
                जर एकूण वसूलपात्र रक्कम एक लाख रु. पेक्षा कमी असल्यास ,
                स्टॅम्पची रक्कम = (एकूण वसूलपात्र रक्कम ) X (२%) किंवा १०० रु.
                यापैकी जास्त रक्कम एकूण स्टॅम्पची रक्कम = स्टॅम्पची रक्कम +
                अर्जास लावायचा कोर्ट फी स्टॅम्प (१००) उदा. जर वसूलपात्र रक्कम
                ५०,००० रुपये असेल तर स्टॅम्पची रक्कम होईल ,५०,००० च्या २% = १०००
                रु.
                <br />
                <br />
                एकूण स्टॅम्पची रक्कम होईल १००० रु. + १०० रु. अर्जाला लावण्याचा
                कोर्ट फी स्टॅम्प = ११०० रु.
                <br />
                <br />
                जर एकूण वसूलपात्र रक्कम एक लाख रु. ते ५ लाखापेक्षा कमी असल्यास ,
                स्टॅम्पची रक्कम = (एकूण वसूलपात्र रक्कम ) X (१% + २०००) किंवा
                जास्तीत जास्त ६००० रु. एकूण स्टॅम्पची रक्कम = स्टॅम्पची रक्कम +
                अर्जास लावायचा कोर्ट फी स्टॅम्प (१००) उदा. जर वसूलपात्र रक्कम
                २,००,००० रुपये असेल तर स्टॅम्पची रक्कम होईल , २,००,००० च्या १% =
                २००० रु. + २००० रु.= ४००० रु. एकूण स्टॅम्पची रक्कम होईल ४००० रु.
                + १०० रु. अर्जाला लावण्याचा कोर्ट फी स्टॅम्प = ४१०० रु.
                <br />
                <br />
                जर एकूण वसूलपात्र रक्कम ५ लाख रु. किंवा त्यापेक्षा जास्त असल्यास
                , स्टॅम्पची रक्कम = (एकूण वसूलपात्र रक्कम ) X (०.५% + ६०००)
                किंवा जास्तीत जास्त २५००० रु. एकूण स्टॅम्पची रक्कम = स्टॅम्पची
                रक्कम + अर्जास लावायचा कोर्ट फी स्टॅम्प (१००) उदा. जर वसूलपात्र
                रक्कम ६,००,००० रुपये असेल तर स्टॅम्पची रक्कम होईल , ६,००,०००
                च्या ०.५% =३००० रु. + ६००० रु.= ९००० रु. एकूण स्टॅम्पची रक्कम
                होईल ९००० रु. + १०० रु. अर्जाला लावण्याचा कोर्ट फी स्टॅम्प =
                ९१०० रु.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
