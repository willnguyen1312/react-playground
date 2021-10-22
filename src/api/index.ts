import axios from "axios";

import { serviceOptions } from "./service";

export const axiosInstance = axios.create({
  baseURL: "https://api-aliens.com",
});

serviceOptions.axios = axiosInstance;

export * from "./service";
