<template>
  <Wrapper>
    <Checkbox :selectedCheckbox="handleSelectedCheckbox"></Checkbox>
    <Avatar></Avatar>
    <div>
      <EditableTitle :value="item.title" @onChangeTitle="handleOnChangeTitle" />
      <EditableText :text="item.text" @onChangeText="handleOnChangeText"></EditableText>
    </div>
    <DeleteButton @click.native="clickEvent(id)"></DeleteButton>
  </Wrapper>
</template>

<script>
import styled from 'vue-styled-components'

import Checkbox from '../../atoms/Checkbox/Checkbox.vue'
import Avatar from '../../atoms/Avatar/Avatar.vue'
import DeleteButton from '../../atoms/DeleteButton/DeleteButton.vue'
import EditableText from '../../atoms/EditableText/EditableText.vue'
import EditableTitle from '../../atoms/EditableTitle/EditableTitle.vue'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 2.5rem 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  > div {
    flex-grow: 2;
    margin-left: 1rem;
  }

  &:hover > button {
    visibility: visible;
  }
`

export default {
  name: 'TranscriptionForm',
  props: {
    title: String,
    text: String,
    onClick: Function,
    id: [Number, String]
  },
  data() {
    return {
      item: {
        id: this.id,
        title: this.title || '',
        text: this.text,
        isChecked: false
      }
    }
  },
  methods: {
    clickEvent(id) {
      this.onClick(id)
    },
    handleSelectedCheckbox() {
      this.item.isChecked = !this.item.isChecked
      this.$emit('selectedItem', this.item)
    },
    handleOnChangeTitle(value) {
      this.item.title = value
    },
    handleOnChangeText(value) {
      this.item.text = value
    }
  },
  components: {
    Wrapper,
    Checkbox,
    Avatar,
    DeleteButton,
    EditableText,
    EditableTitle
  }
}
</script>
