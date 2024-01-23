<template>
  <StyledButton>
    <StyledSvg
      width="16px"
      height="20px"
      view-box="0 0 16 20"
      version="1.1"
    >
      <g
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="
            M3.42857143,20
            L12.5714286,20
            C13.8285714,20
            14.8571429,19
            14.8571429,17.7777778
            L14.8571429,4.44444444
            L1.14285714,4.44444444
            L1.14285714,17.7777778
            C1.14285714,19
            2.17142857,20
            3.42857143,20
            Z
            M12,1.11111111
            L10.8571429,0
            L5.14285714,0
            L4,1.11111111
            L0,1.11111111
            L0,3.33333333
            L16,3.33333333
            L16,1.11111111
            L12,1.11111111
            Z
          "
          id="delete"
          fill="#BFC4CE"
        />
      </g>
    </StyledSvg>
  </StyledButton>
</template>

<script>
import styled from 'vue-styled-components'

import Button from '../Button/Button.vue'

const StyledButton = styled(Button)`
  visibility: hidden;
  position: relative;
`

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  height: 100%;
`

export default {
  name: 'DeleteButton',
  components: {
    StyledButton,
    StyledSvg
  }
}
</script>
