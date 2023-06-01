const axios = require("axios");

// const apiService = axios.create({
//   baseURL: `${process.env.BASE_URL}`,
//   withCredentials: false,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

export default {
  getRelatedLinks() {
    return axios.get("../data/related-links.json");
  },
  getFamous() {
    return axios.get("../data/famous.json");
  },
  getFaq() {
    return axios.get("../data/faq.json");
  },
};
