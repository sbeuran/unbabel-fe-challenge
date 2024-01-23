import Vue from 'vue'
import Vuex from 'vuex'

import {
  getDataFromApi,
  pushDataToApi
} from '../../services/transcriptionsApi'

import {
  LOAD_TRANSCRIPTIONS_SUCCESS,
  LOAD_TRANSCRIPTIONS_FAILED,
  SAVE_TRANSCRIPTIONS_SUCCESS,
  SAVE_TRANSCRIPTIONS_FAILED,
  DELETE_TRANSCRIPTION_BY_ID,
  ADD_NEW_TRANSCRIPTION,
  ADD_CHECKED_TRANSCRIPTIONS
} from './transcriptions.actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transcriptions: [],
    selectedTranscriptions: [],
    loadTranscriptionsFailed: null,
    saveTranscriptionsFailed: null
  },
  mutations: {
    loadTranscriptionsSuccess(state, transcriptions) {
      state.transcriptions = transcriptions
    },
    loadTranscriptionsFailed(state, error) {
      state.loadTranscriptionsFailed = error.message
    },
    saveTranscriptionsSuccess(state) {
      if (state.selectedTranscriptions.length > 0) {
        const result = state.transcriptions
          .filter(transcriptionA => state.selectedTranscriptions
            .some(transcriptionB => transcriptionA.id !== transcriptionB.id))

        state.transcriptions = [...result]
      }
      state.selectedTranscriptions = []
    },
    saveTranscriptionsFailed(state, error) {
      state.saveTranscriptionsFailed = error.message
    },
    deleteTranscriptionById(state, newState) {
      state.transcriptions = newState
    },
    addNewTranscription(state, newState) {
      state.transcriptions.push(newState.newTranscription)
    },
    addCheckedTranscriptions(state, newState) {
      state.selectedTranscriptions.push(newState.transcription)
    }
  },
  actions: {
    loadTranscriptions({ commit }) {
      getDataFromApi(
        commit,
        LOAD_TRANSCRIPTIONS_SUCCESS,
        LOAD_TRANSCRIPTIONS_FAILED
      )
    },
    saveTranscriptions({ commit }, payload) {
      return pushDataToApi(
        commit,
        Object.assign({}, payload.transcriptions),
        SAVE_TRANSCRIPTIONS_SUCCESS,
        SAVE_TRANSCRIPTIONS_FAILED
      )
    },
    deleteRow({ commit, state }, action) {
      const newState = state.transcriptions.filter(({ id }) => id !== action.transcriptionId)
      commit(DELETE_TRANSCRIPTION_BY_ID, newState)
    },
    addRow({ commit }, payload) {
      commit(ADD_NEW_TRANSCRIPTION, payload)
    },
    addSelectedTranscriptions({ commit }, payload) {
      commit(ADD_CHECKED_TRANSCRIPTIONS, payload)
    }
  }
})
