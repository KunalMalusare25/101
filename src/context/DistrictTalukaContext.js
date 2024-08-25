// DistrictTalukaContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchDistricts, fetchTalukas } from "../components/apicall/Api";

const DistrictTalukaContext = createContext();

export const useDistrictTaluka = () => useContext(DistrictTalukaContext);

export const DistrictTalukaProvider = ({ children }) => {
  const [districts, setDistricts] = useState([]);
  const [talukas, setTalukas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    const loadDistricts = async () => {
      try {
        const response = await fetchDistricts();
        setDistricts(response.Message);
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    loadDistricts();
  }, []);

  useEffect(() => {
    if (selectedDistrict) {
      const loadTalukas = async () => {
        try {
          const response = await fetchTalukas(selectedDistrict);
          setTalukas(response.Message);
        } catch (error) {
          console.error("Error fetching talukas:", error);
        }
      };

      loadTalukas();
    } else {
      setTalukas([]);
    }
  }, [selectedDistrict]);

  return (
    <DistrictTalukaContext.Provider
      value={{
        districts,
        talukas,
        setSelectedDistrict,
      }}
    >
      {children}
    </DistrictTalukaContext.Provider>
  );
};
