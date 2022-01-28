import axios from "axios";



const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
});

export const getComics = async () => api.get(`/comics?ts=1643373767&apikey=926d3c5f294702f8d21233924fc645b1&hash=b5162ec8a8fe9eba16751f65e528f67b`);

export default api;
