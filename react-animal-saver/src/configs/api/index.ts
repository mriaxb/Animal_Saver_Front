import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const apiRequest = async (config: AxiosRequestConfig) => {
  try {
    const response = await api(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
