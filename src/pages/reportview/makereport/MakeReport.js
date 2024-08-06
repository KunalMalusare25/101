import React from "react";
import "./makereport.css";
function MakeReport() {
  return (
    <div className="make-report-interface">
      {/* Header Section */}
      <div className="make-report-header">
        <h1>रिपोर्ट</h1>
      </div>

      {/* Report Options Section */}
      <div className="make-report-options">
        <h4> वसुली दाखला देणाऱ्या अधिकाऱ्याचे पद / हुद्दा निवडावा : </h4>
        <div className="make-report-radio-option">
          <input type="radio" id="option1" name="reportOption" />
          <label htmlFor="option1">उपनिबंधक, सहकारी संस्था</label>
        </div>
        <div className="make-report-radio-option">
          <input type="radio" id="option2" name="reportOption" />
          <label htmlFor="option2">उपनिबंधक, सहकारी संस्था (परसेवा)</label>
        </div>
        <div className="make-report-radio-option">
          <input type="radio" id="option3" name="reportOption" />
          <label htmlFor="option3">
            सहा.निबंधक सह.संस्था (परसेवा), म.राज्य सह. पतसंस्था फेडरेशन मर्या.
          </label>
        </div>
        <div className="make-report-radio-option">
          <input type="radio" id="option4" name="reportOption" />
          <label htmlFor="option4">सहाय्यक निबंधक, सहकारी संस्था</label>
        </div>
        <div className="make-report-radio-option">
          <input type="radio" id="option5" name="reportOption" />
          <label htmlFor="option5">
            सहाय्यक निबंधक, सहकारी संस्था (परसेवा)
          </label>
        </div>
        <div className="make-report-radio-option">
          <input type="radio" id="option5" name="reportOption" />
          <label htmlFor="option6">
            सहाय्यक निबंधक (परसेवा),अहमदनगर जिल्हा पतसंस्थांचे सहकारी फेडरेशन
            मर्या. अहमदनगर
          </label>
        </div>
      </div>
      <hr />

      {/* Form Section */}
      <div className="make-report-form-section">
        <div className="make-report-input-group">
          <label>
            वसुली दाखला देणाऱ्या कार्यालयाचा पत्ता (पत्त्या मध्ये जिल्हा व
            तालुका लिहू नये.)
          </label>
          <input
            type="text"
            placeholder="वसूली दाखला देणार्‍या कार्यालयाचा पत्ता"
          />
        </div>
        <div className="make-report-select-group">
          <label>वसुली दाखला देणाऱ्या कार्यालयाचा जिल्हा</label>
          <select>
            <option>जिल्हा निवडा / Select Jilha</option>
            {/* Add options dynamically if needed */}
          </select>
        </div>
        <div className="make-report-select-group">
          <label>वसुली दाखला देणाऱ्या कार्यालयाचा तालुका</label>
          <select>
            <option>तालुका निवडा / Select Taluka</option>
            {/* Add options dynamically if needed */}
          </select>
        </div>
        <div className="make-report-input-group">
          <label>सुनावणीसाठी हजर राहण्याचे ठिकाण</label>
          <input type="text" placeholder="सुनावणीसाठी हजर राहण्याचे ठिकाण" />
        </div>
      </div>
      <hr />

      {/* Search Section */}
      <div className="make-report-search-section">
        <label>Search </label>
        <input type="text" placeholder="थकबाकीदार यादी  Search..." />
      </div>
      <hr />

      {/* Button Section */}
      <div className="make-report-button-section">
        <button className="make-report-blue-button">पहिली नोटीस</button>
        <button className="make-report-blue-button">अंतीम नोटीस</button>
        <button className="make-report-blue-button">ककाम ६४</button>
        <button className="make-report-blue-button">एपीएफेडिट</button>
        <button className="make-report-orange-button">चालन</button>
        <button className="make-report-yellow-button">
          दाखल केलेल्या प्रस्तावांची एकत्रित यादी
        </button>
        <button className="make-report-yellow-button">
          प्रत्येने टेबल प्रिंट करा
        </button>
        <button className="make-report-red-button">101 सेट - पूर्ण सेट</button>
        <button className="make-report-blue-button">101 सेट - नमुना ग</button>
        <button className="make-report-blue-button">
          रजिस्टर पोष पार्सलिंग रसमस
        </button>
        <button className="make-report-blue-button">101 सेट - नमुना क</button>
        <button className="make-report-blue-button">101 सेट - रोजनामा</button>
        <button className="make-report-blue-button">
          101 सेट - रोजनामा एक्स पार्टी
        </button>
        <button className="make-report-blue-button">101 सेट - जबाब</button>
        <button className="make-report-blue-button">101 सेट - ठराव</button>
        <button className="make-report-red-button">
          मागणी नोटीस (प्रकर 1)
        </button>
        <button className="make-report-red-button">
          मागणी नोटीस (प्रकर 2)
        </button>
        <button className="make-report-green-button">
          एक रुपया ठवक विशंती पत्र
        </button>
        <button className="make-report-green-button">
          दोन रुपया ठवक विशंती पत्र
        </button>
        <button className="make-report-green-button">
          तीन रुपया ठवक विशंती पत्र
        </button>
      </div>
    </div>
  );
}

export default MakeReport;
