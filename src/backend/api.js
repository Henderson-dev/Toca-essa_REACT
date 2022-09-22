import axios from "axios";

const api = axios.create({
  baseURL:
    "https://artesplasticas.art.br/_react_backend/alpe/wp-json/wp/v2/pages/10",
});

export default api;