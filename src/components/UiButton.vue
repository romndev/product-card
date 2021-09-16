<template lang="pug">
.ui-button
  button {{ text }}
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    text: {
      type: String,
      default: 'Press me',
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-button{
  width: 100%;

  button{
    border: 0;
    background: dodgerblue;
    color: #fff;
    padding: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 10px;
    width:100%
  }
}
</style>
