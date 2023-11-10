import axios from "axios";

const endpoint = import.meta.env.VITE_ROULETTE_API;

const roulette_api = axios.create({
  baseURL: endpoint
})

export { roulette_api }