<template>
  <Wrapper>
    <slot></slot>
  </Wrapper>
</template>

<script>
import styled from 'vue-styled-components'

const lightColor = ({ theme }) => theme.colors.light

const Wrapper = styled.div`
  background-color: ${lightColor};
  border-radius: .4rem;
  padding: 0;
`

export default {
  name: 'Card',
  components: {
    Wrapper
  }
}
</script>
