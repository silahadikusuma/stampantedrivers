import api from "~/services/api.js";

export const state = () => ({
  listFaq: [],
});

export const getter = {};

export const mutations = {
  setListFaq(state, data) {
    state.listFaq = data;
  },
};

export const actions = {
  fetchFaq({ commit }) {
    api.getFaq().then((response) => {
      commit("setListFaq", response.data);
    });
  },
};
