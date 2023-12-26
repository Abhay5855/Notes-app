import makeAPIRequest from "./makeApiCall";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Register = async (data) => {
  return await makeAPIRequest(`${BASE_URL}/register`, "POST", data);
};

export const Signin = async (data) => {
  return await makeAPIRequest(`${BASE_URL}/login`, "POST", data);
};

export const CreateNotes = async (data, id) => {
  return await makeAPIRequest(`${BASE_URL}/notes/${id}/create`, "POST", data);
};

export const getNotes = async (id) => {
  return await makeAPIRequest(`${BASE_URL}/notes/all/${id}`, "GET");
};

export const logoutUser = async () => {
  return await makeAPIRequest(`${BASE_URL}/logout`, "POST");
};

export const deleteNotes = async (userId, id) => {
  return await makeAPIRequest(
    `${BASE_URL}/notes/${id}/${userId}/delete`,
    "DELETE"
  );
};

export const PinNotes = async (id) => {
  return await makeAPIRequest(`${BASE_URL}/notes/${id}/pin`, "PATCH");
};

export const UnPinNotes = async (id) => {
  return await makeAPIRequest(`${BASE_URL}/notes/${id}/unpin`, "PATCH");
};

export const changeColor = async (id, data) => {
  return await makeAPIRequest(`${BASE_URL}/notes/${id}/color`, "PATCH", data);
};
