// Transcriptions mutation types:
export const LOAD_TRANSCRIPTIONS_SUCCESS = 'loadTranscriptionsSuccess'
export const LOAD_TRANSCRIPTIONS_FAILED = 'loadTranscriptionsFailed'
export const SAVE_TRANSCRIPTIONS_SUCCESS = 'saveTranscriptionsSuccess'
export const SAVE_TRANSCRIPTIONS_FAILED = 'saveTranscriptionsFailed'
export const DELETE_TRANSCRIPTION_BY_ID = 'deleteTranscriptionById'
export const ADD_NEW_TRANSCRIPTION = 'addNewTranscription'
export const ADD_CHECKED_TRANSCRIPTIONS = 'addCheckedTranscriptions'

// Transcriptions action types:
export const LOAD_TRANSCRIPTIONS = 'loadTranscriptions'
export const SAVE_TRANSCRIPTIONS = 'saveTranscriptions'
export const DELETE_ROW = 'deleteRow'
export const ADD_ROW = 'addRow'
export const ADD_SELECTED_TRANSCRIPTIONS = 'addSelectedTranscriptions'


// action generators:
export const removeRow = transcriptionId => ({
  type: DELETE_ROW,
  transcriptionId
})

export const addNewRow = newTranscription => ({
  type: ADD_ROW,
  newTranscription
})

export const selectedTranscriptions = transcription => ({
  type: ADD_SELECTED_TRANSCRIPTIONS,
  transcription
})

export const saveCheckedTranscriptions = transcriptions => ({
  type: SAVE_TRANSCRIPTIONS,
  transcriptions
})
