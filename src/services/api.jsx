import axios from "axios";

// Base URL: https://api.themoviedb.org/3
// URL API: /movie/now_playing?api_key=7f5a8aab17ac60ba30b620773294f5e7&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
