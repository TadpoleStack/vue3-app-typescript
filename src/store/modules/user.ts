interface userType {
  count: number;
}

const state: userType = {
  count: 0,
};

const mutations = {
  count: (state: userType, data: number): void => {
    state.count = data;
  },
};

const actions = {};

const getters = {
  count: (state: userType): number => {
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
