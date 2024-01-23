<template>
 <StyledHeading>
   Transcriptions
 </StyledHeading>
</template>

<script>
import styled from 'vue-styled-components'

const fontFamily = ({ theme }) => theme.fonts.primary || 'sans-serif'

const fontColor = ({ theme }) => theme.colors.logo

const StyledHeading = styled.h1`
  font-family: ${fontFamily};
  color: ${fontColor};
  margin: 0;
  font-size: 1.8rem;
  font-weight: 500;
`

export default {
  name: 'Logo',
  components: {
    StyledHeading
  }
}
</script>
