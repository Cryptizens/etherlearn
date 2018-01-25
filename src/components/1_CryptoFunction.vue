<template lang="pug">
  div
    app-links(
      :previous="'home'"
      :next="'2-transaction-hash'"
    )
    h1 1. It all starts with crypto hashing functions
    div(style="text-align: center")
      small Cryptocurrencies use cryptographic hashing functions.<br>For a given input of any length, these functions return a fixed-length random output.<br>It is virtually impossible to reverse-engineer the output of such functions (find the input based on the output).<br> Also, see how the slighest change in input completely changes the output.
    div.block
      label Input data
      p
        input.block-field(v-model="hashInput" type="textarea")
      label Output hash of the cryptographic function
      p.block-field.hash {{ hashOutput }}
</template>

<script>
import Links from './shared/Links.vue'

export default {
  components: {
    'app-links': Links
  },
  data() {
    return {
      hashInput: 'Hello to all Cryptizens out there !'
    }
  },
  computed: {
    hashOutput() {
      return this.sha256(this.hashInput);
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  border: none;
  color: $gray-900;
  font-family: 'Andale Mono';
  font-size: 16px;
}
</style>
