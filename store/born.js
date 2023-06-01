export const state = () => ({
  yearMyAge: null,
});

export const getter = {};

export const mutations = {
  setYearMyAge(state, data) {
    state.yearMyAge = data;
  },
};

export const actions = {
  async updateYearMyAge({ commit }, data) {
    commit("setYearMyAge", data);
  },
};
