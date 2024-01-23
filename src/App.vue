<template>
  <ThemeProvider :theme="mainTheme.theme">
    <HomePage></HomePage>
  </ThemeProvider>
</template>

<script>
import { ThemeProvider, injectGlobal } from 'vue-styled-components'

import theme from './components/theme/default'

import HomePage from './pages/HomePage.vue'

// eslint-disable-next-line
injectGlobal`
  :root{
    font-size: 62.5%
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    background-color: #F6F7F8;
  }
`

export default {
  name: 'app',
  components: {
    ThemeProvider,
    HomePage
  },
  computed: {
    mainTheme() {
      return {
        theme
      }
    }
  }
}
</script>
