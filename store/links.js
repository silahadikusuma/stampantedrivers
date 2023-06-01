import api from "~/services/api.js";

export const state = () => ({
  listLinks: [],
});

export const getter = {};

export const mutations = {
  setListLinks(state, data) {
    state.listLinks = data;
  },
};

export const actions = {
  async fetchRelatedLinks({ commit }) {
    await api.getRelatedLinks().then((response) => {
      commit("setListLinks", response.data);
    });
  },
};
