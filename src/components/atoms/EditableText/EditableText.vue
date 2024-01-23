<template>
  <textarea
    :style="styles"
    v-model="message"
    v-on:input="$emit('onChangeText', $event.target.value)"
  >
  </textarea>
</template>

<script>
export default {
  name: 'EditableText',
  props: {
    text: String,
    onChangeText: Function
  },
  mounted() {
    this.$el.style.height = `${this.$el.scrollHeight > 60
      ? this.$el.scrollHeight + 30
      : this.$el.scrollHeight}px`
  },
  data() {
    return {
      message: this.text,
      dynamicHeight: 0,
      styles: `
        overflow: auto;
        background: transparent;
        border: none;
        color: ${this.$parent.theme.colors.lightText};
        font-family: ${this.$parent.theme.fonts.secondary};
        font-weight: 500;
        font-size: 1.6rem;
        width: 100%;
        resize: none;
      `
    }
  }
}
</script>
