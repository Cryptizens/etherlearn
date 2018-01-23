<template lang="pug">
  div
    div
      h1 Introduction
    div
      h1 Understanding the blockchain
    div

    div

      h2 Mining a block
      app-block(
        :previousBlockHash="'lol'"
        :transactions="hashingTransactions.transactions",
        :transactionsHash="sha256(hashingTransactions.transactions)",
        :nonce="miningBlocks.nonce",
        :outputHash="miningBlocks.outputHash"
      )

      p Difficulty:
        input(v-model="miningBlocks.difficulty" type="number")
      button(@click="launchMining()") Mine this block !
    div
      h2 Creating a blockchain
    div
      h1 Understanding Smart Contracts
      //- p https://gist.github.com/tomconte/4edb83cf505f1e7faf172b9252fff9bf
    div
      h2 A simple contract
    div
      h2 Compiling to bytecode
    div
      h2 Generating a transaction
    div
      h2 Deploying on the blockchain
    div
      h2 Calling a contract function
</template>

<script>
import Block from './shared/Block.vue'

export default {
  components: {
    'app-block': Block
  },
  data() {
    return {
      hashingInput: {
        hashInput: ''
      },
      hashingTransactions: {
        transactions: [
          {
            fromAddress: 'Albert',
            toAddress: 'Janneke',
            amount: 35.02
          },
          {
            fromAddress: 'Albert',
            toAddress: 'Eddy',
            amount: 3.58
          },
          {
            fromAddress: 'Janneke',
            toAddress: 'Jacques',
            amount: 10.40
          }
        ]
      },
      miningBlocks: {
        difficulty: 1,
        nonce: 0,
        outputHash: ''
      }
    }
  },
  computed: {
    hashedInput() {
      return this.sha256(this.hashingInput.hashInput);
    },
    hashedTransactions() {
      return this.sha256(this.hashingTransactions.transactions);
    }
  }
}
</script>

<style lang="scss">

</style>
