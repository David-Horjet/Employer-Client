import axios from "axios";
import { host } from "./APIRoutes"

const accessToken = localStorage.getItem("token");

export const authAxios = axios.create({
  baseURL: host,
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
});

export const nonAuthAxios = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json'
  }
});
