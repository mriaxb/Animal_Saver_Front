import { AxiosRequestConfig } from "axios";
import { apiRequest } from "../../configs/api";

// export const getTasks = async (): Promise<Task[]> => {
//   const config: AxiosRequestConfig = {
//     method: "GET",
//     url: "/tasks",
//   };
//   return await apiRequest<Task[]>(config);
// };

export const createPet = async (data: FormData) => {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/api/pets/pet",
    data,
  };
  return await apiRequest(config);
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
