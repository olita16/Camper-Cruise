import axios from "axios";

const baseURL = "https://65fb29ff14650eb210098ba0.mockapi.io/api/v1/";

export const axiosIn = axios.create({
  baseURL,
});