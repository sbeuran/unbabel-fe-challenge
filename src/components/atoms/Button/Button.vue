<template>
  <StyledButton>
    <slot></slot>
  </StyledButton>
</template>

<script>
import styled from 'vue-styled-components'

const StyledButton = styled.button`
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

export default {
  name: 'Button',
  components: {
    StyledButton
  }
}
</script>
