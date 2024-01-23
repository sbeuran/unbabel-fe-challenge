<template>
  <AppBar
    :fetchData="handleFetchData"
    :uploadData="handleUploadData"
  ></AppBar>
</template>

<script>
import { mapState } from 'vuex'
import * as transcriptionActions from '../store/transcriptions.actions'

import AppBar from '../components/organisms/AppBar/AppBar.vue'

export default {
  name: 'AppBarContainer',
  components: {
    AppBar
  },
  methods: {
    handleFetchData() {
      this.$store.dispatch(transcriptionActions.LOAD_TRANSCRIPTIONS)
    },
    handleUploadData() {
      const checkedTranscriptions = this.selectedTranscriptions
        .filter(transcription => transcription.isChecked)
      this.$store.dispatch(transcriptionActions
        .saveCheckedTranscriptions(checkedTranscriptions))
    }
  },
  computed: {
    ...mapState(['selectedTranscriptions'])
  }
}
</script>
