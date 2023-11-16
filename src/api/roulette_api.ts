import axios from "axios";

const endpoint = import.meta.env.VITE_ROULETTE_API;

const roulette_api = axios.create({
  baseURL: endpoint
})

const token = localStorage.getItem('token');

if (token) {
  roulette_api.defaults.headers.common["x-token"] = token;
  roulette_api.defaults.headers.common["authentication-x-token"] = token;
}

export { roulette_api }