<template>
  <div>
    <h1 v-if="saveTranscriptionsFailed">{{ saveTranscriptionsFailed }}</h1>
    <Card>
      <TranscriptionForm
        v-for="({ voice, text, id }) in transcriptions"
        :key="id"
        :title="voice"
        :text="text"
        :id="id"
        :onClick="handleDeleteRow"
        @selectedItem="handleSelectedItem"
      >
      </TranscriptionForm>
      <h1 v-if="loadTranscriptionsFailed">{{ loadTranscriptionsFailed }}</h1>
    </Card>
    <AddNewRow @click.native="handleAddRow"></AddNewRow>
  </div>

</template>

<script>
// pass state to props
import { mapState } from 'vuex'
import uuid from 'uuid'

// actions
import * as transcriptionActions from '../store/transcriptions.actions'

// atoms:
import Card from '../components/atoms/Card/Card.vue'

// molecules:
import AddNewRow from '../components/molecules/AddNewRow/AddNewRow.vue'
import TranscriptionForm from '../components/molecules/TranscriptionForm/TranscriptionForm.vue'

export default {
  name: 'TranscriptionFormContainer',
  created() {
    this.$store.dispatch(transcriptionActions.LOAD_TRANSCRIPTIONS)
  },
  methods: {
    handleDeleteRow(transcriptionId) {
      this.$store.dispatch(transcriptionActions.removeRow(transcriptionId))
    },
    handleAddRow() {
      const newTranscription = {
        id: uuid(),
        voice: 'Place your title here',
        text: 'Place your text here'
      }
      this.$store.dispatch(transcriptionActions.addNewRow(newTranscription))
    },
    handleSelectedItem(item) {
      this.$store.dispatch(transcriptionActions.selectedTranscriptions(item))
    }
  },
  computed: {
    ...mapState([
      'transcriptions',
      'loadTranscriptionsFailed',
      'saveTranscriptionsFailed'
    ])
  },
  components: {
    Card,
    TranscriptionForm,
    AddNewRow
  }
}
</script>
