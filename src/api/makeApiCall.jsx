import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const config = {
  apiURl: baseUrl,
};

export const api = axios.create({
  baseURL: config.apiURl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 7000,
});

api.interceptors.request.use((config) => {
  return config;
});

export default async function makeAPIRequest(
  endpoint,
  method,
  data,
  contentType
) {
  const token = JSON.parse(localStorage.getItem("access_token"));

  const request = {
    method,
    url: endpoint,
    data,
  };

  if (!endpoint.includes("register") && !endpoint.includes("login")) {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  //Content Type
  if (contentType) {
    request.headers["Content-Type"] = contentType;
  }

  //error handling

  const response = await api(request);
  if (!response && !response.status === 200) {
    const error = new Error("Unknow error occured");

    error.response = response;
    throw error;
  } else {
    return response.data;
  }
}
