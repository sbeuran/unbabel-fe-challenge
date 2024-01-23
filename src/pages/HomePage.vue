<template>
  <div>
    <AppBarContainer></AppBarContainer>
    <Wrapper>
      <TranscriptionFormContainer></TranscriptionFormContainer>
    </Wrapper>
  </div>
</template>

<script>
import styled from 'vue-styled-components'

// containers
import TranscriptionFormContainer from '../containers/TranscriptionFormContainer.vue'
import AppBarContainer from '../containers/AppBarContainer.vue'

const biggerThanTablet = ({ theme }) => theme.device.tablet

const biggerThanDesktop = ({ theme }) => theme.device.desktop

const Wrapper = styled.div`
  padding: 2rem 4%;

  @media ${biggerThanTablet} {
    padding: 2rem 18%;
  }

  @media ${biggerThanDesktop} {
    padding: 2rem 22%;
  }
`

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    AppBarContainer,
    TranscriptionFormContainer,
    Wrapper
  }
}
</script>
