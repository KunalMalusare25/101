import React, { useState } from "react";
import { useDistrictTaluka } from "../../../../context/DistrictTalukaContext";

const JaminInfo = () => {
  const { districts, talukas, setSelectedDistrict } = useDistrictTaluka();

  const [formData, setFormData] = useState({
    district: "",
    taluka: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "district") {
      setSelectedDistrict(value);
    }
  };

  return (
    <div className="mt-1 mx-auto max-w-5xl bg-white p-8 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold mb-2 text-center">
        जामीनदार माहिती
      </h3>
      <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 ">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 mt-4">
              जामीनदाराचे प्रकार
            </label>

            <select className="p-2 border border-gray-300 rounded-md">
              <option>Select</option>
              <option value="7">भागीदार</option>
              <option value="6">संचालक</option>
              <option value="5">वारसदार</option>
              <option value="4">विश्वस्त</option>
              <option value="3">संमतीदार</option>
              <option value="2">सहकर्जदार</option>
              <option value="1" selected>
                जामिनदार
              </option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 mt-4">
              नाव
            </label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 mt-4">
              वय
            </label>
            <input
              type="number"
              min="0"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              पत्ता
            </label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              पिन
            </label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              जिल्हा
            </label>
            <select className="p-2 border border-gray-300 rounded-md"
              name="district"
              value={formData.district}
              onChange={handleChange}
            >
              <option value="">Select District</option>
                      {districts.map((district) => (
                        <option key={district.code} value={district.code}>
                          {district.descn}
                        </option>
                        ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              तालुका
            </label>
            <select className="p-2 border border-gray-300 rounded-md"
              name="taluka"
              value={formData.taluka}
              onChange={handleChange}
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

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              गाव
            </label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              मोबाईल नं.
            </label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              ई-मेल
            </label>
            <input
              type="email"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              व्यवसाय
            </label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </form>

      <div className="mt-8">
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3 text-left">अ.क्र.</th>
                <th className="border border-gray-300 p-3 text-left">प्रकार</th>
                <th className="border border-gray-300 p-3 text-left">नाव</th>
                <th className="border border-gray-300 p-3 text-left">पत्ता</th>
                <th className="border border-gray-300 p-3 text-left">गाव</th>
                <th className="border border-gray-300 p-3 text-left">तालुका</th>
                <th className="border border-gray-300 p-3 text-left">जिल्हा</th>
                <th className="border border-gray-300 p-3 text-left">पिन</th>
                <th className="border border-gray-300 p-3 text-left">
                  व्यवसाय
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">1</td>
                <td className="border border-gray-300 p-3">जामीनदार</td>
                <td className="border border-gray-300 p-3">
                  शेडगे नरेंद्र खरिंद्र
                </td>
                <td className="border border-gray-300 p-3">
                  आरती कॅलशवेर शनी मंदिर जुना जालना.
                </td>
                <td className="border border-gray-300 p-3">जालना</td>
                <td className="border border-gray-300 p-3">जालना</td>
                <td className="border border-gray-300 p-3">जालना</td>
                <td className="border border-gray-300 p-3">431203</td>
                <td className="border border-gray-300 p-3">व्यवसाय</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">2</td>
                <td className="border border-gray-300 p-3">जामीनदार</td>
                <td className="border border-gray-300 p-3">
                  भुर्कोट विष्णू गणपत
                </td>
                <td className="border border-gray-300 p-3">
                  घर नं. २३, म.ज. जालना
                </td>
                <td className="border border-gray-300 p-3">जालना</td>
                <td className="border border-gray-300 p-3">जालना</td>
                <td className="border border-gray-300 p-3">जालना</td>
                <td className="border border-gray-300 p-3">431203</td>
                <td className="border border-gray-300 p-3">व्यवसाय</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Card view for mobile devices */}
        <div className="block md:hidden space-y-4">
          <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
            <div className="flex flex-col">
              <span className="font-medium text-gray-700">अ.क्र.: 1</span>
              <span className="text-gray-600">प्रकार: जामीनदार</span>
              <span className="text-gray-600">नाव: शेडगे नरेंद्र खरिंद्र</span>
              <span className="text-gray-600">
                पत्ता: आरती कॅलशवेर शनी मंदिर जुना जालना.
              </span>
              <span className="text-gray-600">गाव: जालना</span>
              <span className="text-gray-600">तालुका: जालना</span>
              <span className="text-gray-600">जिल्हा: जालना</span>
              <span className="text-gray-600">पिन: 431203</span>
              <span className="text-gray-600">व्यवसाय: व्यवसाय</span>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
            <div className="flex flex-col">
              <span className="font-medium text-gray-700">अ.क्र.: 2</span>
              <span className="text-gray-600">प्रकार: जामीनदार</span>
              <span className="text-gray-600">नाव: भुर्कोट विष्णू गणपत</span>
              <span className="text-gray-600">
                पत्ता: घर नं. २३, म.ज. जालना
              </span>
              <span className="text-gray-600">गाव: जालना</span>
              <span className="text-gray-600">तालुका: जालना</span>
              <span className="text-gray-600">जिल्हा: जालना</span>
              <span className="text-gray-600">पिन: 431203</span>
              <span className="text-gray-600">व्यवसाय: व्यवसाय</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JaminInfo;
