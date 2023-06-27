import { AxiosRequestConfig } from "axios";
import { apiRequest } from "../../configs/api";
import { Pet } from "../../models/Pet";

// export const getTasks = async (): Promise<Task[]> => {
//   const config: AxiosRequestConfig = {
//     method: "GET",
//     url: "/tasks",
//   };
//   return await apiRequest<Task[]>(config);
// };

export const createPet = async (data: Pet): Promise<Pet> => {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/pet",
    data,
  };
  return await apiRequest<Pet>(config);
};

// export const deleteTask = async (id: string): Promise<void> => {
//   const config: AxiosRequestConfig = {
//     method: "DELETE",
//     url: `/tasks/${id}`,
//   };
//   return await apiRequest<void>(config);
// };

// export const changeIsDone = async (
//   id: string,
//   data: {
//     isDone: boolean;
//   }
// ): Promise<Task> => {
//   const config: AxiosRequestConfig = {
//     method: "PATCH",
//     url: `/tasks/${id}`,
//     data,
//   };
//   return await apiRequest<Task>(config);
// };
