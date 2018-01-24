<template lang="pug">
  .row
    .col.align-left
      router-link(:to="previous") previous
    .col.align-right
      router-link(:to="next") next
</template>

<script>
export default {
  props: [
    'previous',
    'next'
  ]
}
</script>

<style lang="scss" scoped>
  a {
    font-size: 14px;
  }
</style>
