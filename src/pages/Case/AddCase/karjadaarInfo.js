import React from "react";
import "./karja.css";
const KarjadaarInfo = () => {
  return (
    <div>
      <form className="loan-form">
        <div className="form-section">
          <div className="form-group">
            <label>कर्ज प्रकार</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>दायित्वास ठेवे घेणे बाकी रकमेसचा दिनांक</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>कर्ज अर्ज दाखल केल्याचा दिनांक</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>कर्ज अर्ज मंजुरी संचालक मंडळाचा सभेचा दिनांक</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>कर्ज अर्ज मंजुरी ठराव क्रमांक</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>कर्ज विस्तार केल्याचा दिनांक</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>कर्ज मुदत</label>
            <input type="number" />
          </div>
          <div className="form-group">
            <label>कर्जाची अंतिम मुदत</label>
            <input type="date" />
          </div>
        </div>

        <div className="form-section">
          <h3>आकारणी</h3>
          <div className="form-group">
            <label>कर्जाचा व्याजदर</label>
            <input type="number" />
          </div>
          <div className="form-group">
            <label>कर्जाचे दंडव्याज</label>
            <input type="number" />
          </div>
          <div className="form-group">
            <label>पूर्वव्याजदर</label>
            <input type="number" />
          </div>
          <div className="form-group">
            <label>कर्जाचा खाती क्रमांक</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>कर्जाची खाता</label>
            <input type="number" />
          </div>
          <div className="form-group">
            <label>
              कर्जाच्या अंतिम मुदतीपूर्वी दायित्वास ठेवे घेणे बाकी रकमेसचा
              दिनांकपर्यंतची पूर्ण रक्कम
            </label>
            <input type="number" />
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>संचालक मंडळाच्या सभेचे १०२ कारवाई मंजुरीचा दिनांक</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>संचालक मंडळाच्या सभेचे १०२ कारवाई मंजुरी ठराव क्रमांक</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>कर्ज बगळिकरणाची बिसलेला रजिस्टर्ड नोटीसचा दिनांक</label>
            <input type="date" />
          </div>
        </div>
        <div className="form-section">
          <div className="form-group">
            <label>कर्ज प्रकार</label>
            <input type="text" />
          </div>
          {/* ... other form groups ... */}
          <div className="form-group">
            <label>कर्ज बगळिकरणाची बिसलेला रजिस्टर्ड नोटीसचा दिनांक</label>
            <input type="date" />
          </div>
        </div>

        {/* New Sections */}
        <div className="form-section">
          <div className="form-group">
            <label>कर्ज मंजूर रक्कम</label>
            <input type="number" placeholder="₹" />
          </div>
          <div className="form-group">
            <label>दिनांक 31/03/2024 पर्यंत आकारलेले पूर्ण व्याज</label>
            <input type="number" placeholder="₹" />
          </div>
          <div className="form-group">
            <label>आकारलेले दंड व्याज (दंडव्याज)</label>
            <input type="number" placeholder="₹" />
          </div>
          <div className="form-group">
            <label>कर्ज मंजूर रक्कम अवधारित</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>दिनांक 31/03/2024 पर्यंत मूळत: झळोली वसूली</label>
            <input type="number" placeholder="₹" />
          </div>
          <div className="form-group">
            <label>दिनांक 31/03/2024 पर्यंत व्याजात झळोली वसूली</label>
            <input type="number" placeholder="₹" />
          </div>
          <div className="form-group">
            <label>दिनांक 31/03/2024 पर्यंत दंड व्याजात झळोली वसूली</label>
            <input type="number" placeholder="₹" />
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>(अ) दिनांक 31/03/2024 पर्यंत मूळराशी येणे बाकी</label>
            <input type="number" placeholder="₹" />
          </div>
          <div className="form-group">
            <label>(ब) दिनांक 31/03/2024 पर्यंत व्याजाची येणे बाकी</label>
            <input type="number" placeholder="₹" />
          </div>
          <div className="form-group">
            <label>(क) दिनांक 31/03/2024 पर्यंत दंड व्याजाची येणे बाकी</label>
            <input type="number" placeholder="₹" />
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>विमा रक्कम (असेटच्या)</label>
            <input type="number" placeholder="₹" />
          </div>
          <div className="form-group">
            <label>दिनांक 31/03/2024 पर्यंत एकूण नोटीस, पोस्टेज इ. खर्च</label>
            <input type="number" placeholder="₹" />
          </div>
          <div className="form-group">
            <label>दिनांक 31/03/2024 पर्यंत रिसल्व केलेला खर्च</label>
            <input type="number" placeholder="₹" />
          </div>
          <div className="form-group">
            <label>(अ + ब + क + ड = ह) एकूण वसूली झळोली वसूली</label>
            <input type="number" placeholder="₹" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default KarjadaarInfo;
