<template lang="pug">
  div
    h2 Hashing transactions
    ul(v-for="transaction in transactions")
      li
        input(v-model="transaction.fromAddress")
        input(v-model="transaction.toAddress")
        input(v-model="transaction.amount")
    p {{ hashOutput }}
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          fromAddress: 'Albert',
          toAddress: 'Janneke',
          amount: '35.02 ETH'
        },
        {
          fromAddress: 'Albert',
          toAddress: 'Eddy',
          amount: '3.58 ETH'
        },
        {
          fromAddress: 'Janneke',
          toAddress: 'Jacques',
          amount: '10.40 ETH'
        }
      ]
    }
  },
  computed: {
    hashOutput() {
      return this.sha256(JSON.stringify(this.transactions));
    }
  }
}
</script>

<style lang="scss">
</style>
