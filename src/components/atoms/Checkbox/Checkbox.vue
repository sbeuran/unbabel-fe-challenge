<template>
 <Wrapper>
    <StyledInput
      type="checkbox"
      @click="clickEvent()"
    />
    <Checkmark></Checkmark>
  </Wrapper>
</template>

<script>
import styled from 'vue-styled-components'

const primaryColor = ({ theme }) => theme.colors.primary

const Wrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover > input,
  &:hover > span {
    background-color: ${primaryColor};
  }
`

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ span {
    background-color: ${primaryColor};
  }

  &:checked ~ span:after {
    display: block;
  }
`

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 1.6rem;
  width: 1.6rem;
  border: 2px solid ${primaryColor};
  border-radius: 0.3rem;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 4px;
    top: 0;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

export default {
  name: 'Checkbox',
  props: {
    selectedCheckbox: Function
  },
  methods: {
    clickEvent() {
      this.selectedCheckbox()
    }
  },
  components: {
    StyledInput,
    Wrapper,
    Checkmark
  }
}
</script>
