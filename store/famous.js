import api from "~/services/api.js";

export const state = () => ({
  listFamous: [],
});

export const getter = {};

export const mutations = {
  setListFamous(state, data) {
    state.listFamous = data;
  },
};

export const actions = {
  async fetchFamous({ commit }) {
    await api.getFamous().then((response) => {
      commit("setListFamous", response.data);
    });
  },
};