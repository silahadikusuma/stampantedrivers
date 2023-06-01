export const state = () => ({
  sentenceCase: null,
  optionBornYearList: [],
  optionDayYearList: [],
  optionDaysList: [],
  optionMonthsList: [
    {
      value: 1,
      label: "January",
    },
    {
      value: 2,
      label: "February",
    },
    {
      value: 3,
      label: "March",
    },
    {
      value: 4,
      label: "April",
    },
    {
      value: 5,
      label: "Mey",
    },
    {
      value: 6,
      label: "June",
    },
    {
      value: 7,
      label: "July",
    },
    {
      value: 8,
      label: "August",
    },
    {
      value: 9,
      label: "September",
    },
    {
      value: 10,
      label: "October",
    },
    {
      value: 11,
      label: "November",
    },
    {
      value: 12,
      label: "December",
    },
  ],
  yearNow: new Date().getFullYear(),
  linkWidget: null,
});

export const getter = {};

export const mutations = {
  setSentenceCase(state, data) {
    state.sentenceCase = data;
  },
  setOptionBornYearList(state, data) {
    state.optionBornYearList = data;
  },
  setOptionDayYearList(state, data) {
    state.optionDayYearList = data;
  },
  setOptionDaysList(state, data) {
    state.optionDaysList = data;
  },
  setLinkWidget(state, data) {
    state.linkWidget = data;
  },
};

export const actions = {
  async parseToSentenceCase({ commit }, text) {
    let data = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    commit("setSentenceCase", data);
  },
  async generateOptionList({ commit }, data) {
    let tempArray = [];
    for (let index = data.start; index <= data.end; index++) {
      tempArray.push(index);
    }
    if (data.source === "bornYearAge") {
      commit("setOptionBornYearList", tempArray);
    } else if (data.source === "dayYearAge") {
      commit("setOptionDayYearList", tempArray);
    } else if (data.source === "days") {
      commit("setOptionDaysList", tempArray);
    }
  },
  async updateLinkWidget({ commit }, data) {
    commit("setLinkWidget", data);
  },
};