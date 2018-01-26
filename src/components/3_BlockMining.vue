<template lang="pug">
  div
    app-links(
      :previous="'2-transaction-hash'"
      :next="'4-blocks-chain'"
    )
    h1 3. Mining a block
    div(style="text-align: center")
      label Mining difficulty
      input.short(v-model="difficulty" type="number")
      button(@click="mineBlock()") MINE THIS BLOCK !
      button.inverted(@click="resetNonce()") RESET NONCE
    div(style="text-align: center")
      small Mining difficulty constraint: output hash of the Block must start with {{ difficulty }} zeros
    app-block(
      :blockIndex="1",
      :previousBlockHash="previousBlockHash",
      :transactions="transactions",
      :difficulty="difficulty",
      :nonce="nonce"
    )


</template>

<script>
import Block from './shared/Block.vue'
import Links from './shared/Links.vue'

export default {
  components: {
    'app-links': Links,
    'app-block': Block
  },
  data() {
    return {
      nonce: 0,
      difficulty: 1,
      previousBlockHash: 'n.a.',
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
    transactionsHash() {
      return this.sha256(JSON.stringify(this.transactions));
    }
  },
  methods: {
    mineBlock() {
      this.nonce = this.mine(this.transactionsHash, this.previousBlockHash, this.nonce, this.difficulty);
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
