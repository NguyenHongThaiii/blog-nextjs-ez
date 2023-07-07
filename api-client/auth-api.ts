import { axiosClient } from "./axios-client";

export const authApi = {
  login(data: any) {
    const url = "/login";
    return axiosClient.post(url, data);
  },
  logout() {
    const url = "/logout";
    return axiosClient.post(url);
  },
  getProfile() {
    return axiosClient.get("/profile");
  },
};
