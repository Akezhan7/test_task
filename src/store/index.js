import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, {id, description}) {
      const tasks = state.tasks.concat();
      const idx = tasks.findIndex(t => t.id === id);
      const task = tasks[idx];
      const status = new Date().toISOString();

      tasks[idx] = {...task, description, date: status};
      state.tasks = tasks;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task);
    },
    deleteTask({commit}, id) {
      commit('deleteTask', id);
    },
    updateTask({commit}, task) {
      commit('updateTask', task);
    }
  },
  getters: {
    tasks: s => s.tasks
  }
});
