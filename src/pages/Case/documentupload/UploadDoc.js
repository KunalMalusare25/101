import React from "react";
import "./uploadDoc.css";

function UploadDoc() {
  return (
    <div className="upload-form">
      <h2>दस्तऐवज अपलोड करा</h2>
      <hr />
      <form>
        {[
          ["कर्ज अर्जाची सत्य प्रत", "अकाउंट स्टेटमेंट"],
          ["थकित रकमेचे प्रमाणपत्र", "सभासद असल्यास त्याचा पुरावा"],
          ["वचन चिट्ठी", "करारनामा / तारण गहाण कागद पत्र"],
          ["मागणी नोटीस - अ", "मागणी नोटीस - ब"],
          ["ररजिस्टर्ड पोस्ट नोटीस पोहोच पावती", "अधिकारी पत्र - ठराव"],
          ["चौकशी फी बँक चलन", "स्टॅम्प ड्यूटीची पावती"],
          ["नमुना यु", "१०० रुपयांचा कोर्ट फी स्टॅम्प"],
          ["रजिस्टर्ड पोस्ट पावतीसह समन्स", "रोजनामा - २"],
        ].map((pair, index) => (
          <div className="form-row" key={index}>
            <div className="form-group">
              <label>{pair[0]}</label>
              <input type="file" />
            </div>
            <div className="form-group">
              <label>{pair[1]}</label>
              <input type="file" />
            </div>
          </div>
        ))}
        <button type="submit">जतन करा</button>
      </form>
    </div>
  );
}

export default UploadDoc;
