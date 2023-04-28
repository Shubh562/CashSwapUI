import axios from "axios";
import { Config } from "../configuration";

const getFullUrl = (endpoint) => Config.SERVER_URL + `${endpoint}`;

const HEADERS = { 
  'Content-Type': 'application/json'
}

export const postCall = (endpoint, payload, customHeaders = {}) => {
  return axios.post(getFullUrl(endpoint), payload, {headers: {...customHeaders, ...HEADERS}});
}

export const getCall = (endpoint, payload, customHeaders = {}) => {
  return axios.get(getFullUrl(endpoint), payload, {headers: {...customHeaders, ...HEADERS}});
}
