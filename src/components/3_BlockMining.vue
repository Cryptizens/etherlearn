<template lang="pug">
  div
    h1 Mining a block
    div(style="text-align: center")
      label Mining difficulty
      input.short(v-model="difficulty" type="number")
      button(@click="mineBlock()") MINE THIS BLOCK !
      button.inverted(@click="resetNonce()") RESET NONCE
    div(style="text-align: center")
      small Mining difficulty constraint: output hash of the Block must start with {{ difficulty }} zeros
    app-block(
      :previousBlockHash="'---not applicable---'"
      :transactions="transactions",
      :nonce="nonce",
      :minedOutputHash="minedOutputHash"
    )


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
    },
    resetNonce() {
      this.nonce = 0;
    }
  }
}
</script>

<style lang="scss">
</style>
