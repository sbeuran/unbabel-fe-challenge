<template>
  <Wrapper>
    <UploadDataButton></UploadDataButton>
    <FetchDataButton></FetchDataButton>
  </Wrapper>
</template>

<script>
import styled from 'vue-styled-components'

import FetchDataButton from '../../atoms/FetchDataButton/FetchDataButton.vue'
import UploadDataButton from '../../atoms/UploadDataButton/UploadDataButton.vue'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  width: 7rem;
  height: 100%;
  align-items: middle;
  margin-top: 1rem;
`

export default {
  name: 'Navigation',
  components: {
    Wrapper,
    FetchDataButton,
    UploadDataButton
  }
}
</script>
