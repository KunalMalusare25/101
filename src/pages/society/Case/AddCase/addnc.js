import React, { useEffect, useState } from "react";
import JaminInfo from "./jamin";
import KarjadaarInfo from "./karjadaarInfo";
import { fetchDistricts, fetchTalukas } from "../../../../components/apicall/Api";


const Addnc = () => {
  const [activeTab, setActiveTab] = useState("thakbakidar");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const [formData, setFormData] = useState({
    district: "",
    taluka: "",
  });
  const [districts, setDistricts] = useState([]);
  const [talukas, setTalukas] = useState([]);

  useEffect(() => {
    const loadDistracts = async () => {
      try {
        const response = await fetchDistricts();
        console.log(response);
        setDistricts(response.Message);
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    loadDistracts();
  }, []);

  useEffect(() => {
    if (formData.district) {
      const loadTalukas = async () => {
        try {
          const response = await fetchTalukas(formData.district);
          setTalukas(response.Message);
        } catch (error) {
          console.error("Error fetching talukas:", error);
        }
      };

      loadTalukas();
    } else {
      setTalukas([]); // Clear talukas when no district is selected
    }
  }, [formData.district]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto p-8 border border-gray-300 bg-white rounded-lg mt-5">
      <div className="flex flex-wrap border-b border-gray-300 bg-slate-300 px-2">
        <button
          className={`px-5 py-2 transition-colors duration-300 text-base m-1 ${
            activeTab === "thakbakidar"
              ? "bg-gray-600 border-b-2 border-black"
              : "bg-transparent hover:bg-gray-300"
          }`}
          onClick={() => handleTabClick("thakbakidar")}
        >
          थकबाकीदार माहिती
        </button>
        <button
          className={`px-5 py-2 transition-colors duration-300 text-base m-1 ${
            activeTab === "jamin"
              ? "bg-gray-600 border-b-2 border-black"
              : "bg-transparent hover:bg-gray-300"
          }`}
          onClick={() => handleTabClick("jamin")}
        >
          जामीनदार माहिती
        </button>
        <button
          className={`px-5 py-2 transition-colors duration-300 text-base m-1 ${
            activeTab === "karja"
              ? "bg-gray-600 border-b-2 border-black"
              : "bg-transparent hover:bg-gray-300"
          }`}
          onClick={() => handleTabClick("karja")}
        >
          कर्जाची माहिती
        </button>
      </div>

      <div className="p-5">
        {activeTab === "thakbakidar" && (
          <div>
            <p className="text-xl font-bold">थकबाकीदार माहिती</p>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            <br />
            <form>
              <div className="mb-4">
                <label className="block mb-2">नोंदणी क्र.</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">ब्रँच चे नाव</label>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option>Select</option>
                    {/* Add other options */}
                  </select>
                </div>
                <div>
                  <label className="block mb-2">संस्थेचा पत्ता</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-2">मॅनेजरचे नाव</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2">
                  सुनावणीस हजर राहण्यासाठी अधिकार असलेली प्राधिकृत व्यक्ती
                </label>
                <div className="flex space-x-5">
                  <div>
                    <input type="radio" name="authority" value="manjur" /> मंजूर
                  </div>
                  <div>
                    <input type="radio" name="authority" value="adhikari" />
                    अधिकारी
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2">वकिलाचे नाव</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Select</option>
                  {/* Add other options */}
                </select>
              </div>
              <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

              <div className="mt-5 ">
                <p className="text-xl font-bold">थकबाकीदार</p>
                <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="mb-4">
                  <label className="block mb-2">नाव *</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2">पत्ता *</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">वय</label>
                    <input
                      type="number"
                      className="w-full p-2 border border-gray-300 rounded"
                      min="0"
                      value="0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2">जिल्हा *</label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option value="">Select District</option>
                      {districts.map((district) => (
                        <option key={district.code} value={district.code}>
                          {district.descn}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">तालुका *</label>
                    <select
                      name="taluka"
                      value={formData.taluka}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      disabled={!formData.district}
                    >
                      <option value="" disabled>
                        {formData.district
                          ? "Select Taluka"
                          : "Select a District First"}
                      </option>
                      {talukas.map((taluka) => (
                        <option key={taluka.code} value={taluka.code}>
                          {taluka.descn}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2">गाव *</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">पिन</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2">मोबाईल नं.</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">ई-मेल</label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2">CIN नं.</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Account No</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-2">व्यवसाय *</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>
              <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded mt-5"
              >
                जतन करा
              </button>
            </form>
          </div>
        )}
        {activeTab === "jamin" && <JaminInfo />}
        {activeTab === "karja" && <KarjadaarInfo />}
      </div>
    </div>
  );
};

export default Addnc;
