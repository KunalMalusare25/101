import React from 'react';
import './jaminInfo.css'; 

const JaminInfo = () => {
  return (
    <div className="jamin-info">
      <h3>जामीनदार माहिती</h3>
      <form>
        <div className='sec1'>
          <label >जामीनदाराचे प्रकार</label>
          <select style={{width: "100px", padding: "8px", marginRight: "5px", border: "1px solid #ccc", borderRadius: "4px"}}>
            <option>Select</option>
            <option value="7">भागीदार </option>
            <option value="6">संचालक </option>
            <option value="5">वारसदार </option>
            <option value="4">विश्वस्त </option>
            <option value="3">संमतीदार </option>
            <option value="2">सहकर्जदार</option>
            <option value="1"selected>जामिनदार </option>
          </select>

          <label>नाव</label>
          <input type="text" value="शेडगे नरेंद्र खरिंद्र" readOnly />

          <label>वय</label>
          <input type="number" value="38" min="0" />
        </div>  
        <div className="form-row">
          <label>पत्ता</label>
          <input type="text" value="आरती कॅलशवेर शनी मंदिर जुना जालना." />
          <label>पिन</label>
          <input type="text" value="431203" />
        </div>
        <div className="form-row">
          <label>जिल्हा</label>
          <select>
            <option>जालना</option>
            {/* Add other options */}
          </select>
          <label>तालुका</label>
          <select>
            <option>जालना</option>
            {/* Add other options */}
          </select>
          <label>गाव</label>
          <input type="text" value="जालना" />
        </div>
        <div className="form-row">
          <label>मोबाईल नं.</label>
          <input type="text" value="8806622311" />
          <label>ई-मेल</label>
          <input type="email" />
        </div>
        <div className="form-row">
          <label>व्यवसाय</label>
          <input type="text" value="व्यवसाय" />
        </div>
        
      </form>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>अ.क्र.</th>
              <th>प्रकार</th>
              <th>नाव</th>
              <th>पत्ता</th>
              <th>गाव</th>
              <th>तालुका</th>
              <th>जिल्हा</th>
              <th>पिन</th>
              <th>व्यवसाय</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>जामीनदार</td>
              <td>शेडगे नरेंद्र खरिंद्र</td>
              <td>आरती कॅलशवेर शनी मंदिर जुना जालना.</td>
              <td>जालना</td>
              <td>जालना</td>
              <td>जालना</td>
              <td>431203</td>
              <td>व्यवसाय</td>
            </tr>
            <tr>
              <td>2</td>
              <td>जामीनदार</td>
              <td>भुर्कोट विष्णू गणपत</td>
              <td>घर नं. २३, म.ज. जालना</td>
              <td>जालना</td>
              <td>जालना</td>
              <td>जालना</td>
              <td>431203</td>
              <td>व्यवसाय</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JaminInfo;
