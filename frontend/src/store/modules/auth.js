const state = {
  username: null,
};

const getters = {
  getUsername: function(state) {
    return state.username;
  }
};

const mutations = {
  login: function(state, payload) {
    state.username = payload.username;
  },
  logout: function(state) {
    state.username = null;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  //actions,
};