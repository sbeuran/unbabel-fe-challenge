<template>
  <StyledInput type="text" v-on:input="$emit('onChangeTitle', $event.target.value)"></StyledInput>
</template>

<script>
import styled from 'vue-styled-components'

const fontFamily = ({ theme }) => theme.fonts.primary

const fontColor = ({ theme }) => theme.colors.darkText

const StyledInput = styled.input`
  background: transparent;
  display: block;
  border: none;
  font-family: ${fontFamily};
  color: ${fontColor};
  font-weight: 600;
  font-size: 1.6rem;
  width: 100%;
`

export default {
  name: 'EditableTitle',
  props: {
    onChangeTitle: Function
  },
  components: {
    StyledInput
  }
}
</script>
