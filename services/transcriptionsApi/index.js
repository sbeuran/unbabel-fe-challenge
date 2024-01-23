import axios from 'axios'

const API = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c'

export const getDataFromApi = (commit, actionSuccess, actionFailed) => axios
  .get(API)
  .then(response => commit(actionSuccess, response.data))
  .catch(error => commit(actionFailed, error))

export const pushDataToApi = (commit, payload, actionSuccess, actionFailed) => axios
  .post(API, payload)
  .then(response => commit(actionSuccess, response))
  .catch(error => commit(actionFailed, error))
