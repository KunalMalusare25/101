import { ADD_UPDATE_DISTRICT, addupdate_society, loginuser } from "./Urls";
import axios from 'axios';


const postAPI = async (url, body) => {
  console.log(url,body, "url:" )
  
    const resp = await axios.post(url, body);

    return resp.data;

    
  };

  export const AddUpdate_society = (payload) => postAPI(addupdate_society, payload);

  export const luser = (payload) => postAPI(loginuser, payload);

  export const fetchDistricts = (payload) => postAPI(ADD_UPDATE_DISTRICT, payload);

  
  
  
  // export const fetchTalukas = async (districtCode) => {
  //   try {
  //     const response = await axios.post(ADD_UPDATE_TALUKA, {
  //       societycode: 1,
  //       data: [{ parentcode: districtCode }],
  //     });
  //     return response.data.data;
  //   } catch (error) {
  //     console.error('Error fetching talukas:', error);
  //     throw error;
  //   }
  // };
  


