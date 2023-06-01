export const state = () => ({
    listRating: [],
    rating: 5,
  });
  
  export const getter = {};
  
  export const mutations = {
    setListRating(state, data) {
      state.listRating = data;
    },
    setRating(state, data) {
      state.rating = data;
    },
  };
  
  export const actions = {
    async updateListRating({ commit }, responseStars) {
      let listData = responseStars;
      let lengthData = responseStars.length;
      let totalRating = 0;
      let parseStar = listData.map((el) => {
        totalRating = totalRating + el.star;
        return totalRating;
      });
      let sumOfStar = parseStar[parseStar.length - 1];
      let rating = sumOfStar / lengthData;
      commit("setListRating", listData);
      commit("setRating", rating);
    },
    async createRating({ commit }, star) {
      const response = await this.$axios.$post("/", { star });
      let listData = response;
      let lengthData = response.length;
      let totalRating = 0;
      let parseStar = listData.map((el) => {
        totalRating = totalRating + el.star;
        return totalRating;
      });
      let sumOfStar = parseStar[parseStar.length - 1];
      let rating = sumOfStar / lengthData;
      commit("setListRating", listData);
      commit("setRating", rating);
    },
  };