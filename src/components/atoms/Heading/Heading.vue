<template>
 <StyledHeading>
   <slot></slot>
 </StyledHeading>
</template>

<script>
import styled from 'vue-styled-components'

const fontFamily = ({ theme }) => theme.fonts.primary || 'sans-serif'

const fontColor = ({ theme }) => theme.colors.darkText

const StyledHeading = styled.h3`
  font-family: ${fontFamily};
  color: ${fontColor};
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
`

export default {
  name: 'Heading',
  components: {
    StyledHeading
  }
}
</script>
