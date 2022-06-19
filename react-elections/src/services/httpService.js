import axios from "axios";

const BASE_URL = "http://localhost:3001";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

export async function get(url) {
  const { data } = await axiosInstance.get(url);
  return data;
}
