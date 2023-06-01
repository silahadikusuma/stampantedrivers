export const state = () => ({
    bornDate: null,
  });
  
  export const getter = {};
  
  export const mutations = {
    setBornDate(state, data) {
      state.bornDate = data;
    },
  };
  
  export const actions = {
    async setDate({ commit }, bornDate) {
      commit("setBornDate", bornDate);
    },
  };
  

//   udah ya mas 