export const state = () => ({
    listTableOfContent: [],
    listContents: [],
  });
  
  export const getter = {};
  
  export const mutations = {
    setListTableOfContent(state, data) {
      state.listTableOfContent = data;
    },
    setListContents(state, data) {
      state.listContents = data;
    },
  };
  
  export const actions = {
    async updateListTableOfContent({ commit }, data) {
      commit("setListTableOfContent", data);
    },
    async updateListContents({ commit }, data) {
      commit("setListContents", data);
    },
  };