<template lang="pug">
  div
    div
      h1 Introduction
    div
      h1 Understanding the blockchain
    div
      h2 Cryptographic hashing functions
      input(v-model="hashingInput.hashInput")
      p {{ hashedInput }}
    div
      h2 Hashing transactions
      ul(v-for="transaction in hashingTransactions.transactions")
        li
          input(v-model="transaction.fromAddress")
          input(v-model="transaction.toAddress")
          input(v-model="transaction.amount")
      p {{ hashingTransactions.transactions }}
      p {{ sha256(hashingTransactions.transactions) }}
    div
      h2 Mining a block
      p Block hash: {{ sha256(hashingTransactions.transactions) }}
      p Nonce: {{ miningBlocks.nonce }}
      p Block header hash: {{ miningBlocks.outputHash }}
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
export default {
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
  },
  methods: {
    sha256: function(input) {
      var output = CryptoJS.SHA256(JSON.stringify(input)).toString(CryptoJS.enc.Hex);
      return output;
    },
    launchMining() {
      var nonce = this.miningBlocks.nonce;
      var content = this.hashedTransactions;
      var difficulty = this.miningBlocks.difficulty;
      var challengeAchieved = false;
      self = this;

      while (!challengeAchieved) {
        self.miningBlocks.outputHash = self.sha256(JSON.stringify(content) + self.miningBlocks.nonce.toString());
        challengeAchieved = self.blockMined(self.miningBlocks.outputHash, difficulty);
        self.miningBlocks.nonce++
      }

      return true;
    },
    blockMined: function(hash, difficulty) {
      var leadingZeros = Array(parseInt(difficulty) + 1).join("0");
      return hash.startsWith(leadingZeros);
    }
  }
}
</script>

<style lang="scss">

</style>
