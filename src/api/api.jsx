import makeAPIRequest from "./makeApiCall";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Register = async (data) => {
  return await makeAPIRequest(`${BASE_URL}/register`, "POST", data);
};

export const Signin = async (data) => {
  return await makeAPIRequest(`${BASE_URL}/login`, "POST", data);
};