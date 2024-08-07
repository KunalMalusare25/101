import React from "react";
import "./roznama.css";

function Roznama() {
  return (
    <div className="roz-app-container">
      <div className="roz-form-container">
        <div className="roz-header">
          <div>
            <h4>
              <b>अर्जदार संस्थेचे नांव - </b> मुख्य
            </h4>
            <p>
              <b>अर्जदार संस्थेचा पत्ता - </b> बी.2/3, उढाण कॉम्प्लेक्स, मस्तगड
            </p>
          </div>
          <div style={{ marginLeft: "200px", padding: "2px" }}>
            <h3>विरुद्ध:</h3>
            <ul style={{ listStyle: "none", marginLeft: "50px" }}>
              <li>1 थकबाकीदार : पवार सार्थक शिवाजी</li>
              <li>1 जामिनदार : शेडुते नरेंद्र रवींद्र</li>
              <li>2 जामिनदार : भुतेकर शिवाजी गणपत</li>
            </ul>
          </div>
        </div>
        <form className="roz-roznamcha-form">
          <div className="roz-form-row">
            <label>रोजनामा टेम्पलेट</label>
            <select>
              <option>Select</option>
              <option>पहिली सुनावणी</option>
              <option>पुढील सुनावणी</option>
              <option>नमुना व्ही बजावणी</option>
            </select>
          </div>
          <div className="roz-form-row">
            <label>संस्था तरफे हजर राहणेरे मानसाचे नाव :</label>
            <input type="text" />
          </div>
          <div style={{ padding: "10px", fontWeight: "bold" }}>
            <input type="checkbox" />
            <u> गैरहजर</u>
          </div>
          <div className="roz-form-row">
            <label>जाब देनार्या तरफे हजर रहनारे मानसाचे नाव :</label>
            <input type="text" />
          </div>
          <div style={{ padding: "10px", fontWeight: "bold" }}>
            <input type="checkbox" />
            <u> गैरहजर</u>
          </div>
          <div className="roz-form-row">
            <label>दिनांक</label>
            <input type="date" defaultValue="2024-06-12" />
          </div>
          <div className="roz-form-row">
            <label>तपशील</label>
            <textarea />
          </div>
          <div className="roz-form-row">
            <label>पुढील दिनांक:</label>
            <input type="date" defaultValue="2024-06-13" />
          </div>
          <button className="roz-btn" type="submit">जतन करा</button>
        </form>
      </div>
      <div className="roz-table-container">
        <table>
          <thead>
            <tr>
              <th>दिनांक</th>
              <th>तपशील</th>
              <th>संस्था तरफे हजर माणूस</th>
              <th>जाब देनार्या तरफे हजर माणूस</th>
              <th>पुढील दिनांक</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5">No data available in table</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Roznama;
