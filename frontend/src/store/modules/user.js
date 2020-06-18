import axios from 'axios';

const state = {
  username: null,
  todos: [],
};

const getters = {
  getUsername: function(state) {
    return state.username;
  },
  getTodos: function(state) {
    return state.todos;
  },
  getCompletedTodos: function(state) {
    return state.todos.filter((item) => item.completed);
  },
  getNotCompletedTodos: function(state) {
    return state.todos.filter((item) => !item.completed);
  },
};

const mutations = {
  login: function(state, payload) {
    state.username = payload.username;
  },
  logout: function(state) {
    state.username = null;
  },
  addTodo: function(state, payload) {
    state.todos.push(payload);
  },
  updateTodo: function(state, payload) {
    console.log(payload);
    const index = state.todos.findIndex((item) => item._id === payload._id);
    const item = state.todos[index];
    
    Object.keys(payload).forEach(function(key) {
      if (item[key] === payload[key]) {
        return;
      }
      
      item[key] = payload[key];
    });
  }
};

const actions = {
  loadTodos: function({ commit }) {
    const username = state.username;
    
    axios.get(`/api/todos/${username}`)
    .then((res) => res.data.forEach((item) => commit('addTodo', item)));
  },
  addTodo: function({ commit, state }, todo) {
    const username = state.username;
    
    axios.post(`/api/todos/${username}`, todo)
    .then(() => commit('addTodo', todo));
  },
  updateTodo: function({ commit, state }, todo) {
    const username = state.username;

    axios.post(`/api/todos/${username}/${todo._id}`, todo)
    .then(() => commit('updateTodo', todo));
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};