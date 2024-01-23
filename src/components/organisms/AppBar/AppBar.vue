<template>
  <Wrapper>
    <Logo></Logo>
    <div>
      <UploadDataButton @click.native="clickSave()"></UploadDataButton>
      <FetchDataButton @click.native="clickFetch()"></FetchDataButton>
    </div>
  </Wrapper>
</template>

<script>
import styled from 'vue-styled-components'

import Logo from '../../atoms/Logo/Logo.vue'
import UploadDataButton from '../../atoms/UploadDataButton/UploadDataButton.vue'
import FetchDataButton from '../../atoms/FetchDataButton/FetchDataButton.vue'

const backgroundColor = ({ theme }) => theme.colors.light

const biggerThanTablet = ({ theme }) => theme.device.tablet

const biggerThanDesktop = ({ theme }) => theme.device.desktop

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  display: flex;
  justify-content: space-between;
  padding: 2rem 6%;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .2);
  margin-bottom: 4rem;

  @media ${biggerThanTablet} {
    padding: 2rem 20%;
  }

  @media ${biggerThanDesktop} {
    padding: 2rem 22%;
  }
`

export default {
  name: 'AppBar',
  props: {
    fetchData: Function,
    uploadData: Function
  },
  methods: {
    clickFetch() {
      this.fetchData()
    },
    clickSave() {
      this.uploadData()
    }
  },
  components: {
    Wrapper,
    Logo,
    UploadDataButton,
    FetchDataButton
  }
}
</script>
