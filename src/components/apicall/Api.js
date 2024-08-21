// Api.js

import {
  ADD_UPDATE_DISTRICT,
  ADD_UPDATE_TALUKA,
  addupdate_society,
  loginuser,
} from "./Urls";
import axios from "axios";

const postAPI = async (url, body) => {
  console.log(url, body, "url:");

  const resp = await axios.post(url, body);

  return resp.data;
};

export const AddUpdate_society = (payload) =>
  postAPI(addupdate_society, payload);

export const luser = (payload) => postAPI(loginuser, payload);

export const fetchDistricts = (payload) =>
  postAPI(ADD_UPDATE_DISTRICT, payload);

export const fetchTalukas = (districtCode) =>
  postAPI(ADD_UPDATE_TALUKA, {
    societycode: 1,
    parentcode: districtCode,
    code: null,
    descn: null,
  });
