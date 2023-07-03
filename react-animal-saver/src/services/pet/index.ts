import { AxiosRequestConfig } from "axios";
import { apiRequest } from "../../configs/api";

export const createPet = async (data: FormData) => {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/api/pets/pet",
    data,
  };
  return await apiRequest(config);
};
