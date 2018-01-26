<template lang="pug">
  div.block
    h1 BLOCK {{ '#'+blockIndex }}
    label Transactions
    div.tableized.block-field
      table
        thead
          tr
            th.align-left From
            th.align-left To
            th.align-right Amount
        tbody
          tr(v-for="transaction in transactions")
            td
              input.table-input(v-model="transaction.fromAddress")
            td
              input.table-input(v-model="transaction.toAddress")
            td.align-right
              input.align-right.table-input(v-model="transaction.amount")
    label Transactions hash
    p.block-field.hash {{ transactionsHash }}
    label Previous block hash
    p.block-field.hash(v-bind:class="successfullyMinedPrevious ? 'success' : 'danger'") {{ previousBlockHash }}
    label Nonce
    p.block-field {{ nonce }}
    label Output hash
    p.block-field.hash(v-bind:class="successfullyMined ? 'success' : 'danger'") {{ outputHash }}
</template>

<script>
export default {
  props: [
    'blockIndex',
    'previousBlockHash',
    'transactions',
    'nonce',
    'difficulty'
  ],
  computed: {
    transactionsHash() {
      return this.sha256(JSON.stringify(this.transactions));
    },
    outputHash() {
      return this.sha256(this.transactionsHash + this.previousBlockHash + this.nonce.toString());
    },
    successfullyMined() {
      return this.isMined(this.outputHash, this.difficulty);
    },
    successfullyMinedPrevious() {
      return this.isMined(this.previousBlockHash, this.difficulty);
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 40px;
  margin-top: 10px;
  color: white;
}
</style>
