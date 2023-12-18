import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.103.228:9000/api",
});

export default apiClient;
