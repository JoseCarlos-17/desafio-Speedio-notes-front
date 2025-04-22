import Vue from 'vue'
import Vuex from 'vuex'
import { API_url } from '@/main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notesList: [],
    selectedNote: {}
  },

  getters: {
    notesList(state) {
      return state.notesList
    },

    selectedNote(state) {
      return state.selectedNote
    }
  },

  mutations: {
    SET_NOTES_LIST(state, payload) {
      state.notesList = payload
    },

    SET_SELECTED_NOTE(state, payload) {
      state.selectedNote = payload
    }
  },

  actions: {
    getNotesList({ commit }) {
      return API_url.get('/notes').then(response => {
        commit('SET_NOTES_LIST', response.data)
      }).catch(error => error)
    },

    // eslint-disable-next-line
    createNote({ commit },payload) {
      return API_url.post('/notes', { note: payload })
                    .then(response => response).catch(error => error)
    },

    showSelectedNote({ commit }, payload) {
      return API_url.get(`/notes/${payload}`).then(response => {
        commit('SET_SELECTED_NOTE', response.data)
      }).catch(error => error)
    },

    // eslint-disable-next-line
    deleteSelectedNote({ commit }, payload) {
      return API_url.delete(`/notes/${payload}`)
                    .then(response => response)
                    .catch(error => error)
    }
  },
})