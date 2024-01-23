<template>
  <StyledParagraph>
    <slot></slot>
  </StyledParagraph>
</template>

<script>
import styled from 'vue-styled-components'

const fontFamily = ({ theme }) => theme.fonts.secondary || 'sans-serif'

const textColor = ({ theme }) => theme.colors.lightText

const StyledParagraph = styled.p`
  font-family: ${fontFamily};
  color: ${textColor};
  font-size: 1.6rem;
  font-weight: 400;
`

export default {
  name: 'Paragraph',
  components: {
    StyledParagraph
  }
}
</script>
