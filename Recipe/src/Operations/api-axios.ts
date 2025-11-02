import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: import.meta.env.VITE_SPOON_KEY,
  },
});
