<template>
  <Wrapper>
    <AddRowButton></AddRowButton>
  </Wrapper>
</template>

<script>
import styled from 'vue-styled-components'

import AddRowButton from '../../atoms/AddRowButton/AddRowButton.vue'

const Wrapper = styled.div`
  text-align: center;

  & > button {
    margin: 3rem auto;
    display: inline-block;
  }
`

export default {
  name: 'AddNewRow',
  components: {
    AddRowButton,
    Wrapper
  }
}
</script>
