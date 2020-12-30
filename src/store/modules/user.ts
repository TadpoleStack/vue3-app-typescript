const state = {
  count: 0,
};

const mutations = {
  count: (state: any, data: number) => {
    state.count = data;
  },
};

const actions = {};

const getters = {
  count: (state: any) => {
    return state.count;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
