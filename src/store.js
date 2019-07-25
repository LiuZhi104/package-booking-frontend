import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import item from './views/item'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    listItems: [],
    showItems: []

  },
  mutations: {
    addItem (state, item) {
      state.showItems.push(item)
      state.listItems.push(item)
    },
    complete (state) {
      state.showItems = state.listItems.filter((item) => {
        return item.isChecked
      })
    },
    active (state) {
      state.showItems = state.listItems.filter((item) => {
        return !item.isChecked
      })
    },
    all (state) {
      state.showItems = state.listItems.map(a => a)
    },
    print (state, item) {
      state.showItems = item
    }

  },
  actions: {
    addItems ({ commit }) {
      axios.post('http://localhost:3001/todos/', item).then(response => {
        commit('addItems', response.data)
      })
    },
    complete ({ commit }) {
      axios.get('http://localhost:3001/todos/').then(response => {
        commit('complete', response.data)
      })
    },
    active ({ commit }) {
      axios.get('http://localhost:3001/todos/').then(response => {
        commit('active', response.data)
      })
    },
    all ({ commit }) {
      axios.get('http://localhost:3001/todos/').then(response => {
        commit('all', response.data)
      })
    },
    getPickup ({ commit }) {
      axios.get('http://localhost:3001/todos/').then(response => {
        commit('getPickup', response.data)
      })
    }
  }

})
