<template lang="pug">
  div
    app-links(
      :previous="'3-block-mining'"
      :next="'Home'"
    )
    h1 4. Chaining blocks in a Blockchain
    div(style="text-align: center")
      label Mining difficulty
      input.short(v-model="difficulty" type="number")
      button(@click="mineBlocks()") MINE THESE BLOCKS !
      button.inverted(@click="resetNonces()") RESET NONCES
    div(style="text-align: center")
      small Mining difficulty constraint: output hash of the Blocks must start with {{ difficulty }} zeros
    .row
      .col.col-lg-4
        app-block(
          :blockIndex="1"
          :previousBlockHash="firstPreviousBlockHash"
          :transactions="transactionsSet[0]",
          :difficulty="difficulty",
          :nonce="nonces.one"
        )
      .col.col-lg-4
        app-block(
          :blockIndex="2"
          :previousBlockHash="outputHashOne"
          :transactions="transactionsSet[1]",
          :difficulty="difficulty",
          :nonce="nonces.two"
        )
      .col.col-lg-4
        app-block(
          :blockIndex="3"
          :previousBlockHash="outputHashTwo"
          :transactions="transactionsSet[2]",
          :difficulty="difficulty",
          :nonce="nonces.three"
        )


</template>

<script>
import Block from './shared/Block.vue'
import Links from './shared/Links.vue'

export default {
  components: {
    'app-block': Block,
    'app-links': Links
  },
  data() {
    return {
      nonces: {
        one: 0,
        two: 0,
        three: 0
      },
      difficulty: 1,
      firstPreviousBlockHash: 'n.a.',
      transactionsSet: [
        [
          {
            fromAddress: 'Albert',
            toAddress: 'Janneke',
            amount: '35.02 ETH'
          },
          {
            fromAddress: 'Albert',
            toAddress: 'Eddy',
            amount: '7.50 ETH'
          }
        ],
        [
          {
            fromAddress: 'Jean',
            toAddress: 'Janneke',
            amount: '4.10 ETH'
          },
          {
            fromAddress: 'Janneke',
            toAddress: 'Albert',
            amount: '2.00 ETH'
          }
        ],
        [
          {
            fromAddress: 'Eddy',
            toAddress: 'Janneke',
            amount: '7.50 ETH'
          },
          {
            fromAddress: 'Georges',
            toAddress: 'Jacques',
            amount: '100.00 ETH'
          }
        ]
      ]
    }
  },
  computed: {
    outputHashOne() {
      return this.sha256(this.sha256(this.stringifiedTransactions(0)) + this.firstPreviousBlockHash + this.nonces.one.toString());
    },
    outputHashTwo() {
      return this.sha256(this.sha256(this.stringifiedTransactions(1)) + this.outputHashOne + this.nonces.two.toString());
    },
    outputHashThree() {
      return this.sha256(this.sha256(this.stringifiedTransactions(2)) + this.outputHashTwo + this.nonces.three.toString());
    }
  },
  methods: {
    mineBlocks() {
      this.nonces.one   = this.mine(this.sha256(this.stringifiedTransactions(0)), this.firstPreviousBlockHash, this.nonces.one, this.difficulty);
      this.nonces.two   = this.mine(this.sha256(this.stringifiedTransactions(1)), this.outputHashOne, this.nonces.two, this.difficulty);
      this.nonces.three = this.mine(this.sha256(this.stringifiedTransactions(2)), this.outputHashTwo, this.nonces.three, this.difficulty);
      return true;
    },
    stringifiedTransactions: function(index) {
      return JSON.stringify(this.transactionsSet[index]);
    },
    resetNonces() {
      this.nonces.one   = 0;
      this.nonces.two   = 0;
      this.nonces.three = 0;
    }
  }
}
</script>

<style lang="scss">
</style>
