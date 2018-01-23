<template lang="pug">
  div
    h2 Cryptographic hashing functions
    input(v-model="hashInput")
    span {{ hashOutput }}
    span {{ hashOutput }}
</template>

<script>
export default {
  data() {
    return {
      hashInput: ''
    }
  },
  computed: {
    hashOutput() {
      return this.sha256(this.hashInput);
    }
  }
}
</script>

<style lang="scss">
</style>
