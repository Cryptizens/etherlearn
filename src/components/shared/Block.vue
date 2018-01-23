<template lang="pug">
  div
    h1 BLOCK #1
    p Transactions
    table.block-input
      thead
        th.align-left From
        th.align-left To
        th.align-right Amount
      tbody
        tr(v-for="transaction in transactions")
          td {{ transaction.fromAddress }}
          td {{ transaction.toAddress }}
          td.align-right {{ transaction.amount }}
    //- h2 Hashes
    p Transactions hash
    p.block-input.hash {{ transactionsHash }}
    p Previous block hash
    p.block-input.hash {{ previousBlockHash }}
    p Nonce
    p.block-input {{ nonce }}
    p Mined hash
    p.block-input.hash {{ minedOutputHash }}
</template>

<script>
export default {
  props: [
    'previousBlockHash',
    'transactions',
    'nonce',
    'minedOutputHash'
  ],
  computed: {
    transactionsHash() {
      return this.sha256(JSON.stringify(this.transactions));
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  background: $limeade-gradient;
  border-radius: 6px;
  color: $gray-900;
  padding: 20px 40px 20px 40px;;
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid $gray-500;
  transition: box-shadow .25s;
  box-shadow: 0 2px 20px rgba(0,0,0,0.17);
  font-family: 'Andale Mono';

  @media (max-width: 1000px){
    margin: 20px 0 !important;
    padding: 20px !important;
  }
}

table {
  width: 100%;
}

.block-input {
  color: $gray-900;
  background-color: white;
  border-radius: 3px;
  padding: 10px;
  min-height: 15px;
  overflow: scroll;
}

th {
  border-bottom: 1px dashed $gray-900;
}

h1 {
  margin-top: 10px;
  color: white;
}

h2 {
  font-size: 20px;
}

.hash {
  font-size: 0.8em;
}
</style>
