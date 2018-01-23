<template lang="pug">
  div
    h1 Mining a block
    p We've seen how we
    app-block(
      :previousBlockHash="'lol'"
      :transactions="transactions",
      :nonce="nonce",
      :minedOutputHash="minedOutputHash"
    )
    input(v-model="difficulty")
    button(@click="mineBlock()") Mine this block!
</template>

<script>
import Block from './shared/Block.vue'

export default {
  components: {
    'app-block': Block
  },
  data() {
    return {
      nonce: 0,
      difficulty: 1,
      minedOutputHash: '',
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
    stringifiedTransactions() {
      return JSON.stringify(this.transactions);
    }
  },
  methods: {
    mineBlock() {
      var results = this.mine(this.stringifiedTransactions, this.nonce, this.difficulty);
      this.nonce = results.nonce;
      this.minedOutputHash = results.outputHash;
      return true;
    }
  }
}
</script>

<style lang="scss">
</style>
